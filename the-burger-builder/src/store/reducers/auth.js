import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  let errorResponse = null;
  console.log(action.error.message);
  switch (action.error.message) {
    case "EMAIL_EXISTS":
      errorResponse = "The email address is already in use by another account.";
      break;
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      errorResponse =
        "We have blocked all requests from this device due to unusual activity. Try again later.";
      break;
    case "EMAIL_NOT_FOUND":
      errorResponse =
        "There is no user record corresponding to this identifier. The user may have been deleted or this email address has never been used to sign up before.";
      break;
    case "INVALID_PASSWORD":
      errorResponse =
        "The password is invalid. Please make sure Caps Lock is off and you entered the correct password.";
      break;
    case "USER_DISABLED":
      errorResponse = "The user account has been disabled.";
      break;
    default:
      errorResponse = action.error.message;
  }
  return updateObject(state, {
    error: errorResponse,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null
  });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, {
    authRedirectPath: action.path
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
