// src/services/authService.js

class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
        this.currentUser = null;
    }

    async login(credentials) {
        try {
            const response = await this.apiService.post('/login', credentials);
            this.currentUser = response.data.user;
            return this.currentUser;
        } catch (error) {
            this.handleError(error);
        }
    }

    async logout() {
        try {
            await this.apiService.post('/logout');
            this.currentUser = null;
        } catch (error) {
            this.handleError(error);
        }
    }

    async register(userData) {
        try {
            const response = await this.apiService.post('/register', userData);
            this.currentUser = response.data.user;
            return this.currentUser;
        } catch (error) {
            this.handleError(error);
        }
    }

    getCurrentUser() {
        return this.currentUser;
    }

    handleError(error) {
        console.error('Authentication error:', error);
        throw new Error('Authentication failed. Please try again.');
    }
}

export default AuthService;