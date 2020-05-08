import { LOGIN, LOGOUT, ERRORED, REGISTER } from "../types/AuthTypes.js";

export const register = () => {
  return {
    type: REGISTER,
  };
};

export const login = (isLoggedIn, bearerToken, username) => {
  return {
    type: LOGIN,
    payload: isLoggedIn,
    bearerToken,
    username,
  };
};

export const logout = (isLoggedIn, bearerToken, username) => {
  return {
    type: LOGOUT,
    payload: isLoggedIn,
    bearerToken,
    username,
  };
};

export const loginerror = (hasErrored, errorMsg) => {
  return {
    type: ERRORED,
    payload: hasErrored,
    errorMsg,
  };
};
