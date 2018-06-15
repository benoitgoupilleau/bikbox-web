import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const defaultState = {
  authToken: '',
  user: {},
  errorLogin: false
}

export default (state = defaultState, action) => {
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
    default:
      return state;
  }
};
