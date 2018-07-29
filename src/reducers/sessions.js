import {
  SET_SESSIONPLACE,
  SET_SESSIONPLACE_FAIL,
  SET_DELETED_SESSIONPLACE,
  REACTIVE_DELETED_SESSIONPLACE,
  DELETE_SESSION,
  LOGOUT,
  UPDATE_SESSION
} from '../actions/types';

const defaultSessionsState = {
  sessionPlace: [],
  deletedSession: [],
  sessionPlaceLoaded: false,
  deletedSessionLoaded: false,
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
        ...state,
        sessionPlaceLoaded: false,
        errorLoading: true
      }
    case DELETE_SESSION: {
      const currentSession = [ ...state.sessionPlace];
      const filteredSession = currentSession.filter((session) => session._id !== action._id);
      const sessionRemoved = currentSession.filter((session) => session._id === action._id)[0];
      sessionRemoved.active = false;
      const currentDeletedSession = [ ...state.deletedSession];
      currentDeletedSession.push(sessionRemoved);
      return {
        ...state,
        sessionPlace: [ ...filteredSession],
        deletedSession: [ ...currentDeletedSession]
      }
    }
    case SET_DELETED_SESSIONPLACE:
      return {
        ...state,
        deletedSession: action.sessions,
        deletedSessionLoaded: true
      }
    case REACTIVE_DELETED_SESSIONPLACE: {
      const currentDeletedSession = [...state.deletedSession];
      const filteredSession = currentDeletedSession.filter((session) => session._id !== action._id);
      const sessionRemoved = currentDeletedSession.filter((session) => session._id === action._id)[0];
      sessionRemoved.active = true;
      const currentSession = [...state.sessionPlace];
      currentSession.push(sessionRemoved);
      return {
        ...state,
        sessionPlace: [...currentSession],
        deletedSession: [...filteredSession]
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