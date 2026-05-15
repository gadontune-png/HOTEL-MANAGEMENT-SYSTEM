const API_URL = 'http://localhost:3001'

export const getBookings = async () => {
  const response = await fetch(`${API_URL}/bookings`)
  return await response.json()
}

export const addBooking = async (booking) => {
  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking)
  })
  return await response.json()
}

export const createBooking = addBooking

export const cancelBooking = async (id) => {
  const response = await fetch(`${API_URL}/bookings/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'Cancelled' })
  })
  return await response.json()
}

export const deleteBooking = async (id) => {
  await fetch(`${API_URL}/bookings/${id}`, { method: 'DELETE' })
  return { success: true }
}

export const updateBooking = async (id, updates) => {
  const response = await fetch(`${API_URL}/bookings/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  })
  return await response.json()
}

export const getAvailableCounts = async () => {
  const response = await fetch(`${API_URL}/rooms`)
  const rooms = await response.json()
  return {
    Standard: rooms.filter(r => r.type === 'Standard' && r.status === 'available').length,
    Deluxe: rooms.filter(r => r.type === 'Deluxe' && r.status === 'available').length,
    Family: rooms.filter(r => r.type === 'Family' && r.status === 'available').length,
    Business: rooms.filter(r => r.type === 'Business' && r.status === 'available').length,
  }
}

export const checkInGuest = async (data) => {
  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, status: 'checked-in' })
  })
  return await response.json()
}

export const checkOutGuest = async (roomNumber) => {
  const bookings = await getBookings()
  const booking = bookings.find(b => b.roomNumber === roomNumber)
  if (!booking) return { success: false, message: 'Booking not found' }
  const response = await fetch(`${API_URL}/bookings/${booking.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'checked-out' })
  })
  return await response.json()
}
