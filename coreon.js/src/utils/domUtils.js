// Utility functions for DOM manipulation

export function createElement(tag, attributes = {}, ...children) {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

export function appendTo(parent, child) {
    parent.appendChild(child);
}

export function removeElement(element) {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

export function setStyle(element, styles) {
    Object.keys(styles).forEach(style => {
        element.style[style] = styles[style];
    });
}

export function addEventListener(element, event, handler) {
    element.addEventListener(event, handler);
}

export function removeEventListener(element, event, handler) {
    element.removeEventListener(event, handler);
}

export function querySelector(selector) {
    return document.querySelector(selector);
}

export function querySelectorAll(selector) {
    return document.querySelectorAll(selector);
}

export function toggleClass(element, className) {
    element.classList.toggle(className);
}

export function hasClass(element, className) {
    return element.classList.contains(className);
}

export function setAttribute(element, name, value) {
    element.setAttribute(name, value);
}

export function getAttribute(element, name) {
    return element.getAttribute(name);
}