// src/mixins/resizable.js

class Resizable {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        this.element.style.position = 'relative';
        this.createResizeHandle();
    }

    createResizeHandle() {
        const handle = document.createElement('div');
        handle.style.width = '10px';
        handle.style.height = '10px';
        handle.style.backgroundColor = 'blue';
        handle.style.position = 'absolute';
        handle.style.right = '0';
        handle.style.bottom = '0';
        handle.style.cursor = 'se-resize';
        this.element.appendChild(handle);

        handle.addEventListener('mousedown', this.onMouseDown.bind(this));
    }

    onMouseDown(event) {
        event.preventDefault();
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    onMouseMove(event) {
        const newWidth = event.clientX - this.element.getBoundingClientRect().left;
        const newHeight = event.clientY - this.element.getBoundingClientRect().top;

        if (newWidth > 50) {
            this.element.style.width = newWidth + 'px';
        }
        if (newHeight > 50) {
            this.element.style.height = newHeight + 'px';
        }
    }

    onMouseUp() {
        document.removeEventListener('mousemove', this.onMouseMove.bind(this));
        document.removeEventListener('mouseup', this.onMouseUp.bind(this));
    }
}

export default Resizable;