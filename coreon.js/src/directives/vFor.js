// vFor.js - Directive for rendering lists in Coreon.js framework

export default function vFor(element, items, renderItem) {
    // Clear the element's existing content
    element.innerHTML = '';

    // Iterate over the items and render each one
    items.forEach((item, index) => {
        const itemElement = renderItem(item, index);
        element.appendChild(itemElement);
    });
}

// Usage example:
// const listElement = document.getElementById('list');
// const items = [1, 2, 3, 4];
// vFor(listElement, items, (item) => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     return li;
// });