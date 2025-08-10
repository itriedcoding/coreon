const useMemo = (callback, dependencies) => {
    const memoizedValue = useRef();

    if (!memoizedValue.current || dependenciesChanged(dependencies, memoizedValue.dependencies)) {
        memoizedValue.current = callback();
        memoizedValue.dependencies = dependencies;
    }

    return memoizedValue.current;
};

const dependenciesChanged = (newDeps, oldDeps) => {
    if (newDeps.length !== oldDeps.length) return true;
    for (let i = 0; i < newDeps.length; i++) {
        if (newDeps[i] !== oldDeps[i]) return true;
    }
    return false;
};

export default useMemo;