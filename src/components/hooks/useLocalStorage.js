import { useState } from 'react';

export const useLocalStorage = ( key, initialValue) => {
    if (typeof key !== "string") throw new Error("The key is not a string");
    const [storedValue, setStoredValue] = useState(()=>{
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};