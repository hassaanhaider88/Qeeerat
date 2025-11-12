// Utility function to store a key in localStorage with a timer (in minutes)

export function LocalStorageWithTimer(key, value, minutes) {
  // Convert minutes → milliseconds
  const ttl = minutes * 60 * 1000;

  // Store value with expiry timestamp
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));

  // Set a timeout to auto-remove it after expiry
  setTimeout(() => {
    const storedItem = localStorage.getItem(key);
    if (!storedItem) return;

    const parsed = JSON.parse(storedItem);
    if (new Date().getTime() >= parsed.expiry) {
      localStorage.removeItem(key);
      console.log(`🕒 ${key} removed after ${minutes} minute(s)`);
    }
  }, ttl);
}

// Optional helper: read data safely (it auto-clears if expired)
export function GetLocalStorageWithTimer(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}
