// src/core/errorHandler.js

class ErrorHandler {
    constructor() {
        this.errors = [];
    }

    logError(error) {
        this.errors.push(error);
        console.error('Error logged:', error);
    }

    getErrors() {
        return this.errors;
    }

    clearErrors() {
        this.errors = [];
    }

    handleError(error) {
        this.logError(error);
        // Additional error handling logic can be added here
    }
}

export default new ErrorHandler();