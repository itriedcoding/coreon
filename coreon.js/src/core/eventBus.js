// EventBus implementation for Coreon.js framework
class EventBus {
    constructor() {
        this.listeners = {};
    }

    // Subscribe to an event
    on(event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }

    // Unsubscribe from an event
    off(event, listener) {
        if (!this.listeners[event]) return;

        this.listeners[event] = this.listeners[event].filter(l => l !== listener);
    }

    // Emit an event
    emit(event, ...args) {
        if (!this.listeners[event]) return;

        this.listeners[event].forEach(listener => {
            listener(...args);
        });
    }

    // Clear all listeners for an event
    clear(event) {
        if (this.listeners[event]) {
            delete this.listeners[event];
        }
    }
}

// Exporting the EventBus class
export default new EventBus();