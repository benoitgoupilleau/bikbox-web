import { REHYDRATE } from 'redux-persist';
import moment from '../helpers/moment';
import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
  TOGGLE_NAV,
  SELECT_ENTITY
} from '../actions/types';

const defaultUserState = {
  authToken: '',
  expiresIn: 0,
  user: {},
  errorLogin: false,
  passwordUpdated: false,
  isNavOpen: false,
  selectedEntity: ''
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
        errorLogin: false,
        selectedEntity: action.user._entity[0]._id
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorLogin: true
      }
    case LOGOUT:
      return { ...defaultUserState};
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
    case SELECT_ENTITY: 
      return {
        ...state,
        selectedEntity: action._id
      }
    default:
      return state;
  }
};