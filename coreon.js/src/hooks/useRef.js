// src/hooks/useRef.js

function useRef(initialValue) {
    const ref = {
        current: initialValue
    };

    return ref;
}

export default useRef;