export const setItem = (key, value) => {
  localStorage.setItem(key, value);
  return;
};

export const getItem = (key) => {
  localStorage.getItem(key);
  return;
};

export const removeItem = (key) => {
  localStorage.clear();
  return;
};
