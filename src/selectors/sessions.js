import moment from '../helpers/moment'

export const sessionPerParking = (parkings, sessions) => {
  const sessionPerParkingData = []
  for (let i = 0; i < parkings.length; i += 1) {
    parkings[i].sessions = [] 
    for (let j = 0; j < sessions.length; j += 1) {
      if (sessions[j]._parking === parkings[i]._id) parkings[i].sessions.push(sessions[j])
    }
    sessionPerParkingData.push(parkings[i]);
  }
  return sessionPerParkingData
}

export const filterSession = (sessions, sorting, filter) => {
  return sessions
    .filter((session) => session.identifier.includes(filter.text))
    .filter((session) => session.startDate >= filter.startDate && (!session.endDate ? moment().unix() <= filter.endDate : session.endDate <= filter.endDate ))
    .sort((a, b) => a[sorting.value] > b[sorting.value] ? sorting.order : -sorting.order)
}