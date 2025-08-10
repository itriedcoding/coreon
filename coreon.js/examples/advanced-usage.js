// advanced-usage.js

import Coreon from '../src/index.js';
import { createElement } from '../src/utils/domUtils.js';
import { useState, useEffect } from '../src/hooks/useState.js';
import { apiService } from '../src/services/apiService.js';

// Initialize Coreon framework
const app = new Coreon();

// Define a sample component
class UserProfile extends Coreon.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            loading: true,
        };
    }

    async fetchUserData() {
        const userData = await apiService.getUserData();
        this.setState({ user: userData, loading: false });
    }

    componentDidMount() {
        this.fetchUserData();
    }

    render() {
        if (this.state.loading) {
            return createElement('div', null, 'Loading...');
        }

        const { user } = this.state;
        return createElement('div', null, 
            createElement('h1', null, `Hello, ${user.name}`),
            createElement('p', null, `Email: ${user.email}`)
        );
    }
}

// Register the component
app.component('user-profile', UserProfile);

// Mount the application
app.mount('#app');

// Example of using hooks
function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return createElement('div', null, 
        createElement('h2', null, `Count: ${count}`)
    );
}

// Render the App component
app.mount('#app-hooks', App);