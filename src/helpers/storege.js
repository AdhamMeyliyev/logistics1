export const setItem = (key, value) => {
  sessionStorage.setItem(key, value);
  return;
};

export const getItem = (key) => {
  sessionStorage.getItem(key);
  return;
};

export const removeItem = (key) => {
  sessionStorage.removeItem(key);
  return;
};
