import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
  TOGGLE_NAV
} from '../actions/types';

const defaultUserState = {
  authToken: '',
  user: {},
  errorLogin: false,
  passwordUpdated: false,
  isNavOpen: false
}

export default (state = defaultUserState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authToken: action.authToken,
        user: action.user,
        errorLogin: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorLogin: true
      }
    case LOGOUT:
      return defaultState;
    case UPDATE_PASSWORD:
      return {
        ...state,
        passwordUpdated: true
      };
    case UPDATE_PASSWORD_FAIL: 
      return {
        ...state,
        passwordUpdated: false,
      }
    case TOGGLE_NAV:
      return {
        ...state,
        isNavOpen: !state.isNavOpen
      }
    default:
      return state;
  }
};