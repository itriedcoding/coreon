// src/hooks/useEffect.js

function useEffect(callback, dependencies) {
    const hasNoDependencies = !dependencies || dependencies.length === 0;
    const hasChanged = dependencies && dependencies.some((dep, index) => {
        return dep !== previousDependencies[index];
    });

    if (hasNoDependencies || hasChanged) {
        callback();
        previousDependencies = dependencies;
    }
}

let previousDependencies = [];

export default useEffect;