import moment from '../helpers/moment';

import {
  UPDATE_STARTDATE,
  UPDATE_ENDDATE,
  UPDATE_TEXT
} from '../actions/types';

const defaultSessionFilter = {
  sorting: {
    value: 'startDate',
    order: -1
  },
  filter: {
    text: '',
    startDate: moment().startOf('day').subtract(2, 'months').unix(),
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
    default:
      return state;
  }
}