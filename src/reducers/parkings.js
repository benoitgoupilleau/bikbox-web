import {
  SET_PARKING,
  SET_PARKING_FAIL,
  LOGOUT
} from '../actions/types';

const defaultParkingsState = {
  parkings: [],
  parkingsLoaded: false,
  errorLoading: false
}

export default (state = defaultParkingsState, action) => {
  switch (action.type) {
    case SET_PARKING:
      return {
        ...state,
        parkings: action.parkings,
        parkingsLoaded: true,
        errorLoading: false
      }
    case SET_PARKING_FAIL:
      return {
        parkingsLoaded: false,
        errorLoading: true
      }
    case LOGOUT:
      return {...defaultParkingsState}
    default:
      return state;
  }
}