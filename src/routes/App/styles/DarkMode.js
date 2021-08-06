import { useState } from 'react';

export const useDarkMode = () => {
    const [state, setState] = useState('dark');

    const toggleTheme = () => {
        state === 'dark' ? setState('light') : setState('dark');
    }
    return [state, toggleTheme];
}

