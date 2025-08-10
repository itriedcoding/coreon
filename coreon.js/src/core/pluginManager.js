// src/core/pluginManager.js

class PluginManager {
    constructor() {
        this.plugins = [];
    }

    register(plugin) {
        if (typeof plugin.init === 'function') {
            plugin.init();
            this.plugins.push(plugin);
        } else {
            throw new Error('Plugin must have an init method');
        }
    }

    unregister(plugin) {
        const index = this.plugins.indexOf(plugin);
        if (index > -1) {
            this.plugins.splice(index, 1);
        } else {
            throw new Error('Plugin not found');
        }
    }

    getPlugins() {
        return this.plugins;
    }

    executeHook(hookName, ...args) {
        this.plugins.forEach(plugin => {
            if (typeof plugin[hookName] === 'function') {
                plugin[hookName](...args);
            }
        });
    }
}

export default new PluginManager();