import {
  SET_SESSIONPLACE,
  SET_SESSIONPLACE_FAIL,
  DELETE_SESSION,
  LOGOUT,
  UPDATE_SESSION
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
    case DELETE_SESSION: {
      const currentSession = [ ...state.sessionPlace];
      const filteredSession = currentSession.filter((session) => session._id !== action._id);
      return {
        sessionPlace: [ ...filteredSession]
      }
    }
    case UPDATE_SESSION: {
      const sessionPlaceUpdated = state.sessionPlace.map((session) => {
        if (session._id === action._id) {
          return {
            ...session,
            endDate: action.endDate
          }
        } 
        return session;
      })
      return {
        ...state,
        sessionPlace: sessionPlaceUpdated
      }
    }
    case LOGOUT:
      return defaultSessionsState
    default:
      return state;
  }
}