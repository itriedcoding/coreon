// src/services/notificationService.js

class NotificationService {
    constructor() {
        this.notifications = [];
    }

    addNotification(message, type = 'info') {
        const notification = {
            id: this.generateId(),
            message,
            type,
            timestamp: new Date(),
        };
        this.notifications.push(notification);
        this.displayNotification(notification);
    }

    removeNotification(id) {
        this.notifications = this.notifications.filter(notification => notification.id !== id);
    }

    displayNotification(notification) {
        // Placeholder for displaying notification in the UI
        console.log(`[${notification.type.toUpperCase()}] ${notification.message}`);
    }

    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    getNotifications() {
        return this.notifications;
    }
}

export default new NotificationService();