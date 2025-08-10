// src/core/router.js

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.onRouteChange = this.onRouteChange.bind(this);
        window.addEventListener('popstate', this.onRouteChange);
    }

    registerRoute(path, component) {
        this.routes[path] = component;
    }

    navigate(path) {
        if (this.routes[path]) {
            this.currentRoute = path;
            window.history.pushState({}, '', path);
            this.render();
        } else {
            console.error(`Route ${path} not found`);
        }
    }

    onRouteChange() {
        this.currentRoute = window.location.pathname;
        this.render();
    }

    render() {
        const component = this.routes[this.currentRoute];
        if (component) {
            document.getElementById('app').innerHTML = component.render();
        } else {
            document.getElementById('app').innerHTML = '<h1>404 - Not Found</h1>';
        }
    }
}

export default Router;