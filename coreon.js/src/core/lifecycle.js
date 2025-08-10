// src/core/lifecycle.js

class Lifecycle {
    constructor() {
        this.hooks = {
            beforeMount: [],
            mounted: [],
            beforeUpdate: [],
            updated: [],
            beforeUnmount: [],
            unmounted: []
        };
    }

    // Register a lifecycle hook
    on(hook, callback) {
        if (this.hooks[hook]) {
            this.hooks[hook].push(callback);
        } else {
            throw new Error(`Unknown lifecycle hook: ${hook}`);
        }
    }

    // Trigger lifecycle hooks
    trigger(hook) {
        if (this.hooks[hook]) {
            this.hooks[hook].forEach(callback => callback());
        } else {
            throw new Error(`Unknown lifecycle hook: ${hook}`);
        }
    }
}

export default Lifecycle;