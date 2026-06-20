import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue = []) {
    const [data, setData] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Ошибка чтения из localStorage:", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error("Ошибка записи в localStorage:", error);
        }
    }, [key, data]);

    const saveData = (newData) => {
        setData(newData);
    };

    return [data, saveData];
}