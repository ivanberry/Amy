export const storeInfo = (k, v) => {
	localStorage.setItem(k, JSON.stringify(v));
};

export const clearInfo = k => {
	localStorage.removeItem(k);
};

export const getInfo = k => {
	return JSON.parse(localStorage.getItem(k));
}

export const isLogin = (k) => {
	return JSON.parse(localStorage.getItem(k)) !== null;
}

