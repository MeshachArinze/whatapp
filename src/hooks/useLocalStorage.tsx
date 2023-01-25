import React, { useEffect, useState } from 'react'

const PREFIX = 'whatsapp-clone-'
export default function useLocalStorage(key: string, initialValue: any) {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);
        console.log(jsonValue);
        if (jsonValue != null ) return JSON.parse(jsonValue);

        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
  return [value, setValue];
}
