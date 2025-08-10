import { useContext as reactUseContext } from 'react';
import { Context } from '../core/context'; // Assuming there's a context file in core

export const useContext = () => {
    const contextValue = reactUseContext(Context);

    if (!contextValue) {
        throw new Error('useContext must be used within a Provider');
    }

    return contextValue;
};