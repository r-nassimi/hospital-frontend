const passwordRule= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const loginRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

export const validationLogin= (str) => {
	return loginRule.test(String(str));
};
