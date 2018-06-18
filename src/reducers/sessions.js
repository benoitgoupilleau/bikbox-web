import {
  SET_SESSIONPLACE,
  SET_SESSIONPLACE_FAIL,
  LOGOUT
} from '../actions/types';

const defaultSessionsState = {
  sessionPlace: [],
  sessionPlaceLoaded: false,
  errorLoading: false
}

export default (state = defaultSessionsState, action) => {
  switch (action.type) {
    case SET_SESSIONPLACE:
      return {
        ...state,
        sessionPlace: action.sessions,
        sessionPlaceLoaded: true,
        errorLoading: false
      }
    case SET_SESSIONPLACE_FAIL:
      return {
        sessionPlaceLoaded: false,
        errorLoading: true
      }
    case LOGOUT:
      return defaultSessionsState
    default:
      return state;
  }
}