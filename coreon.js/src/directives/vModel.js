// src/directives/vModel.js

class VModel {
    constructor(element, model) {
        this.element = element;
        this.model = model;
        this.init();
    }

    init() {
        this.element.value = this.model;

        this.element.addEventListener('input', (event) => {
            this.model = event.target.value;
            this.updateModel();
        });

        this.observeModel();
    }

    updateModel() {
        // Logic to update the model and notify changes
        console.log('Model updated:', this.model);
    }

    observeModel() {
        // Logic to observe changes in the model and update the element
        // This could be implemented using Proxy or Object.defineProperty
    }
}

export default VModel;