const defaultAlertFilter = {
  sorting: {
    value: 'startDate',
    order: -1
  },
}

export default (state = defaultAlertFilter, action) => {
  switch (action.type) {
    default:
      return state;
  }
}