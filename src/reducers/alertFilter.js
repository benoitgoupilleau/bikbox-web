const defaultAlertFilter = {
  sorting: {
    value: 'createdAt',
    order: -1
  },
}

export default (state = defaultAlertFilter, action) => {
  switch (action.type) {
    default:
      return state;
  }
}