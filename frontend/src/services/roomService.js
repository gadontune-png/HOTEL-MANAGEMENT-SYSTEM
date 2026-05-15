const API_URL = 'http://localhost:3001'

const roomService = {
  getAllRooms: async () => {
    const response = await fetch(`${API_URL}/rooms`)
    return await response.json()
  },

  getRoomById: async (id) => {
    const response = await fetch(`${API_URL}/rooms/${id}`)
    return await response.json()
  },

  filterRooms: async ({ type, maxPrice }) => {
    let url = `${API_URL}/rooms?`
    if (type && type !== 'All') url += `type=${type}&`
    if (maxPrice) url += `price_lte=${maxPrice}`
    const response = await fetch(url)
    return await response.json()
  },

  updateRoomStatus: async (id, status) => {
    const response = await fetch(`${API_URL}/rooms/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
    return await response.json()
  }
}

export default roomService
