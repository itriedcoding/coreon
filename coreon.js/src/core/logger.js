// src/core/logger.js

class Logger {
    constructor() {
        this.levels = {
            ERROR: 'ERROR',
            WARN: 'WARN',
            INFO: 'INFO',
            DEBUG: 'DEBUG'
        };
        this.currentLevel = this.levels.DEBUG; // Default to DEBUG level
    }

    setLevel(level) {
        if (this.levels[level]) {
            this.currentLevel = this.levels[level];
        } else {
            console.warn(`Invalid log level: ${level}`);
        }
    }

    log(level, message) {
        if (this.levels[level] && this.isLevelEnabled(level)) {
            const timestamp = new Date().toISOString();
            console.log(`[${timestamp}] [${level}] ${message}`);
        }
    }

    isLevelEnabled(level) {
        const levelsArray = Object.values(this.levels);
        return levelsArray.indexOf(level) <= levelsArray.indexOf(this.currentLevel);
    }

    error(message) {
        this.log(this.levels.ERROR, message);
    }

    warn(message) {
        this.log(this.levels.WARN, message);
    }

    info(message) {
        this.log(this.levels.INFO, message);
    }

    debug(message) {
        this.log(this.levels.DEBUG, message);
    }
}

export default new Logger();