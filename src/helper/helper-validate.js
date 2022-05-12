const rule = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
export const validationPassword = (password) => {
  return rule.test(password);
};