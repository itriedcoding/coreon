// src/hooks/useState.js

function useState(initialValue) {
    let state = initialValue;

    const setState = (newValue) => {
        state = newValue;
        // Trigger re-render or update logic here
    };

    const getState = () => state;

    return [getState, setState];
}

export default useState;