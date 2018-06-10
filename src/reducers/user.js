import {
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
  TOGGLE_NAV
} from '../actions/types';

const defaultUserState = {
  passwordUpdated: false,
  isNavOpen: false
}

export default (state = defaultUserState, action) => {
  switch (action.type) {
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
