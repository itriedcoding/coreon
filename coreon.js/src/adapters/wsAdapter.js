// src/adapters/wsAdapter.js

class WebSocketAdapter {
    constructor(url) {
        this.url = url;
        this.socket = null;
        this.listeners = {};
    }

    connect() {
        this.socket = new WebSocket(this.url);

        this.socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        this.socket.onmessage = (event) => {
            this.handleMessage(event.data);
        };

        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    handleMessage(data) {
        const message = JSON.parse(data);
        const { type, payload } = message;

        if (this.listeners[type]) {
            this.listeners[type].forEach(callback => callback(payload));
        }
    }

    on(type, callback) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }

    send(type, payload) {
        const message = JSON.stringify({ type, payload });
        this.socket.send(message);
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}

export default WebSocketAdapter;