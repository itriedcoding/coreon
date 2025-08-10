// src/adapters/httpAdapter.js

class HttpAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint, params = {}) {
        const url = new URL(endpoint, this.baseURL);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
        const response = await fetch(url);
        this._handleResponse(response);
        return response.json();
    }

    async post(endpoint, data) {
        const response = await fetch(new URL(endpoint, this.baseURL), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        this._handleResponse(response);
        return response.json();
    }

    async put(endpoint, data) {
        const response = await fetch(new URL(endpoint, this.baseURL), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        this._handleResponse(response);
        return response.json();
    }

    async delete(endpoint) {
        const response = await fetch(new URL(endpoint, this.baseURL), {
            method: 'DELETE',
        });
        this._handleResponse(response);
        return response.json();
    }

    _handleResponse(response) {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
}

export default HttpAdapter;