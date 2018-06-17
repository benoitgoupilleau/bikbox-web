import {
  SET_SESSIONPLACE,
  LOGOUT
} from '../actions/types';

const defaultSessionsState = {
  sessionPlace: [],
  sessionPlaceLoaded: false
}

export default (state = defaultSessionsState, action) => {
  switch (action.type) {
    case SET_SESSIONPLACE:
      return {
        ...state,
        sessionPlace: action.sessions,
        sessionPlaceLoaded: true
      }
    case LOGOUT:
      return defaultSessionsState
    default:
      return state;
  }
}