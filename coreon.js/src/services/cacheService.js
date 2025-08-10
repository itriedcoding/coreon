// src/services/cacheService.js

class CacheService {
    constructor() {
        this.cache = new Map();
    }

    set(key, value) {
        this.cache.set(key, value);
    }

    get(key) {
        return this.cache.has(key) ? this.cache.get(key) : null;
    }

    has(key) {
        return this.cache.has(key);
    }

    delete(key) {
        return this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }

    getAll() {
        return Array.from(this.cache.entries());
    }
}

export default new CacheService();