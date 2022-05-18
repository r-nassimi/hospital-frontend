const passwordRule= /^[a-zA-Z]{6,20}$/;
const loginRule = /^[a-zA-Z0-9]{6,18}$/;

export const validationLogin= (str) => {
	return loginRule.test(String(str));
};

export const validationPassword = (str) => {
	return passwordRule.test(String(str));
};