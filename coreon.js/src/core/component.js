class Component {
    constructor(props) {
        this.props = props || {};
        this.state = {};
        this.lifecycleHooks = {
            mounted: [],
            updated: [],
            unmounted: []
        };
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.triggerUpdate();
    }

    triggerUpdate() {
        this.lifecycleHooks.updated.forEach(hook => hook(this.state));
    }

    mount() {
        this.lifecycleHooks.mounted.forEach(hook => hook(this.state));
    }

    unmount() {
        this.lifecycleHooks.unmounted.forEach(hook => hook(this.state));
    }

    onMount(hook) {
        this.lifecycleHooks.mounted.push(hook);
    }

    onUpdate(hook) {
        this.lifecycleHooks.updated.push(hook);
    }

    onUnmount(hook) {
        this.lifecycleHooks.unmounted.push(hook);
    }
}

export default Component;