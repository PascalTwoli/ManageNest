// localStorageUtils.js

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  };
  
  export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };