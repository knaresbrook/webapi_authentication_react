import { REGISTER, LOGIN, LOGOUT, ERRORED } from "../types/AuthTypes";
import { initialState } from "../store/initialState";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        isLoggedIn: false,
        hasErrored: false,
        bearerToken: "",
        username: "",
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        hasErrored: false,
        bearerToken: action.bearerToken,
        username: action.username,
        errorMsg: "",
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
        hasErrored: false,
        bearerToken: "",
        username: "",
      };
    case ERRORED:
      return {
        isLoggedIn: false,
        bearerToken: "",
        username: "",
        hasErrored: true,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};

export default authReducer;
