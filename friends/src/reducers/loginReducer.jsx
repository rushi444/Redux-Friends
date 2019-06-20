import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
  isLogin: false,
  loginError: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLogin: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: false,
        loginError: null
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLogin: false,
        loginError: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
