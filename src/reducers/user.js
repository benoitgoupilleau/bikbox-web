import {
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL
} from '../actions/types';

const defaultUserState = {
  passwordUpdated: false
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
    default:
      return state;
  }
};
