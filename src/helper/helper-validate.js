const validationRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

export const validationString = (str) => {
  return validationRule.test(String(str));
};