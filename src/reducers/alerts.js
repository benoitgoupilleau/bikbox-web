import {
  SET_ALERT,
  SET_ALERT_FAIL,
  LOGOUT
} from '../actions/types';

const defaultAlertsState = {
  alerts: [],
  alertsLoaded: false,
  errorLoading: false
}

export default (state = defaultAlertsState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: action.alerts,
        alertsLoaded: true,
        errorLoading: false
      }
    case SET_ALERT_FAIL:
      return {
        alertsLoaded: false,
        errorLoading: true
      }
    case LOGOUT:
      return defaultAlertsState
    default:
      return state;
  }
}