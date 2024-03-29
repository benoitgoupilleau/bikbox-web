import moment from '../helpers/moment';

import {
  UPDATE_STARTDATE,
  UPDATE_ENDDATE,
  UPDATE_TEXT,
  SELECT_ENTITY,
  LOGOUT
} from '../actions/types';

const defaultSessionFilter = {
  sorting: {
    value: 'startDate',
    order: -1
  },
  filter: {
    text: '',
    startDate: moment().startOf('day').subtract(1, 'months').unix(),
    endDate: moment().endOf('day').unix()
  }
}

export default (state = defaultSessionFilter, action) => {
  switch (action.type) {
    case UPDATE_STARTDATE:
      return {
        ...state,
        filter: {
          ...state.filter, startDate: action.date.unix()
        }
      }
    case UPDATE_ENDDATE:
      return {
        ...state,
        filter: {
          ...state.filter, endDate: action.date.unix()
        }
      }
    case UPDATE_TEXT:
      return {
        ...state,
        filter: {
          ...state.filter, text: action.text
        }
      }
    case SELECT_ENTITY: 
      return {
        ...state,
        filter: {
          ...state.filter, text: ''
        }
      }
    case LOGOUT:
      return { ...defaultSessionFilter };
    default:
      return state;
  }
}