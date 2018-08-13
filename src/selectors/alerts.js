export const filterAlert = (sessions, filter) => {
  return sessions.sort((a, b) => a[filter.sorting.value] > b[filter.sorting.value] ? filter.sorting.order : -filter.sorting.order)
}