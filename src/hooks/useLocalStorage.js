import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
        }
        return (initialValue)
    });
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue];
}
export default useLocalStorage;