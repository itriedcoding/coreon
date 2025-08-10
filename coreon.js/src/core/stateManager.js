// src/core/stateManager.js

class StateManager {
    constructor() {
        this.state = {};
        this.listeners = [];
    }

    // Get the current state
    getState() {
        return this.state;
    }

    // Set a new state
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notifyListeners();
    }

    // Subscribe to state changes
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    // Notify all listeners about state changes
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.state));
    }

    // Reset the state to initial values
    resetState(initialState = {}) {
        this.state = initialState;
        this.notifyListeners();
    }
}

export default new StateManager();