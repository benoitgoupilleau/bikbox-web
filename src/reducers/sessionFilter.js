const defaultSessionFilter = {
  sorting: {
    value: 'startDate',
    order: -1
  },
}

export default (state = defaultSessionFilter, action) => {
  switch (action.type) {
    default:
      return state;
  }
}