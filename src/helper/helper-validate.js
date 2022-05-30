const validationRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

//according to the general rules for creating a login/username/password, the length must be at least 6 characters and have at least 1 symbol
export const validationObject = (str) => {
  return validationRule.test(str);
};