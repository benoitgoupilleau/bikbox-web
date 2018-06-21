import moment from 'moment';
import { REHYDRATE } from 'redux-persist';
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
  expiresIn: 0,
  user: {},
  errorLogin: false,
  passwordUpdated: false,
  isNavOpen: false
}

export default (state = defaultUserState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      if (!action.payload || !action.payload.user ||action.payload.user.expiresIn < moment().unix()) {
        return {
          ...state
        }
      }
      return {
        ...state,
        ...action.payload.user
      }
    }
    case LOGIN:
      return {
        ...state,
        authToken: action.authToken,
        user: action.user,
        expiresIn: action.expiresIn,
        errorLogin: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorLogin: true
      }
    case LOGOUT:
      return defaultUserState;
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