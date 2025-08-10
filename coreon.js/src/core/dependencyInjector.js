// src/core/dependencyInjector.js

class DependencyInjector {
    constructor() {
        this.services = new Map();
    }

    register(name, service) {
        if (this.services.has(name)) {
            throw new Error(`Service ${name} is already registered.`);
        }
        this.services.set(name, service);
    }

    resolve(name) {
        const service = this.services.get(name);
        if (!service) {
            throw new Error(`Service ${name} is not registered.`);
        }
        return service;
    }

    unregister(name) {
        if (!this.services.has(name)) {
            throw new Error(`Service ${name} is not registered.`);
        }
        this.services.delete(name);
    }

    clear() {
        this.services.clear();
    }
}

export default new DependencyInjector();