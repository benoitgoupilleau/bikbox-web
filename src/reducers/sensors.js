import {
  SET_SENSOR,
  SET_SENSOR_FAIL,
  LOGOUT
} from '../actions/types';

const defaultSensorsState = {
  sensors: [],
  sensorsLoaded: false,
  errorLoading: false
}

export default (state = defaultSensorsState, action) => {
  switch (action.type) {
    case SET_SENSOR:
      return {
        ...state,
        sensors: action.sensors,
        sensorsLoaded: true,
        errorLoading: false
      }
    case SET_SENSOR_FAIL:
      return {
        sensorsLoaded: false,
        errorLoading: true
      }
    case LOGOUT:
      return defaultSensorsState
    default:
      return state;
  }
}