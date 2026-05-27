export function getData(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  }
  
  export function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event("app-data-updated"));
  }
  
  export function subscribeData(callback) {
    window.addEventListener("app-data-updated", callback);
    window.addEventListener("storage", callback);
  
    return () => {
      window.removeEventListener("app-data-updated", callback);
      window.removeEventListener("storage", callback);
    };
  }