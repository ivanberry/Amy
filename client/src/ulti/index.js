export const storeInfo = (k, v) => {
	localStorage.setItem(k, JSON.stringify(v));
};

export const clearInfo = k => {
	localStorage.removeItem(k);
};
