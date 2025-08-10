// src/utils/storage.js

const Storage = {
    setItem(key, value) {
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        localStorage.setItem(key, JSON.stringify(value));
    },

    getItem(key) {
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },

    removeItem(key) {
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        localStorage.removeItem(key);
    },

    clear() {
        localStorage.clear();
    },

    getAllItems() {
        const items = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            items[key] = JSON.parse(localStorage.getItem(key));
        }
        return items;
    }
};

export default Storage;