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

export const filterSession = (sessions, filter) => {
  return sessions.sort((a, b) => a[filter.sorting.value] > b[filter.sorting.value] ? filter.sorting.order : -filter.sorting.order)
}