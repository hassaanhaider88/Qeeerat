export default function LocalStorageWithTimer(key, value, minutes) {
  // --- If only key is provided → Getter mode ---
  if (value === undefined || minutes === undefined) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return { success: false, remainingTime: 0 };

    try {
      const item = JSON.parse(itemStr);
      const now = Date.now();
      const remaining = item.expiry - now;

      if (remaining <= 0) {
        localStorage.removeItem(key);
        return { success: false, remainingTime: 0 };
      }

      return { success: true, remainingTime: remaining, value: item.value };
    } catch (err) {
      console.error("Invalid JSON in localStorage for key:", key);
      localStorage.removeItem(key);
      return { success: false, remainingTime: 0 };
    }
  }

  // --- If key, value, and minutes are provided → Setter mode ---
  const ttl = minutes * 60 * 1000; // Convert minutes to ms
  const now = Date.now();

  const item = {
    value,
    expiry: now + ttl,
  };

  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    console.error("localStorage write failed:", err);
    return { success: false, remainingTime: 0 };
  }

  // Auto-remove item after expiry (only works while tab is open)
  setTimeout(() => {
    const data = localStorage.getItem(key);
    if (!data) return;

    try {
      const parsed = JSON.parse(data);
      if (Date.now() >= parsed.expiry) {
        localStorage.removeItem(key);
        console.log(`🕒 ${key} expired and removed`);
      }
    } catch (err) {
      localStorage.removeItem(key);
    }
  }, ttl);

  // Return initial success immediately
  return { success: true, remainingTime: ttl };
}
