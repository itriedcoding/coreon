// vIf.js - Directive for conditional rendering in Coreon.js

class VIf {
    constructor(condition, template) {
        this.condition = condition;
        this.template = template;
        this.rendered = false;
    }

    update(newCondition) {
        if (newCondition !== this.condition) {
            this.condition = newCondition;
            this.render();
        }
    }

    render() {
        if (this.condition && !this.rendered) {
            this.mount();
        } else if (!this.condition && this.rendered) {
            this.unmount();
        }
    }

    mount() {
        this.template.render();
        this.rendered = true;
    }

    unmount() {
        this.template.destroy();
        this.rendered = false;
    }
}

export default VIf;