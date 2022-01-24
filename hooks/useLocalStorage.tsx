import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: any): (any | Function)[] => {
  const [storedValue, setStoredValue] = useState([]);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.log(error);
      setStoredValue(initialValue);
    }
  }, [])

  function setValue(value: any): void {
    try {
      setStoredValue(value);
      // Save to local storage
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  return [storedValue, setValue];
}

export default useLocalStorage;