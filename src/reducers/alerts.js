import {
  SET_ALERT,
  SET_ALERT_FAIL,
  CLOSE_ALERT,
  CLOSE_ALERT_FAILED,
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
    case CLOSE_ALERT: {
      const currentAlerts = [ ...state.alerts ];
      const indexToUpdate = currentAlerts.findIndex(alert => alert._id === action.id);
      const updatedAlert = { ...currentAlerts[indexToUpdate], status: 'closed' };
      return {
        ...state,
        alerts: [...currentAlerts.slice(0, indexToUpdate), updatedAlert, ...currentAlerts.slice(indexToUpdate+1)]
      }
    }
    case LOGOUT:
      return {...defaultAlertsState}
    default:
      return state;
  }
}