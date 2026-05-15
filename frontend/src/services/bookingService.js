import { initialBookings } from '../data/bookings'

const STORAGE_KEY = 'hotel_bookings'

const roomRanges = {
  'Standard Room': { min: 101, max: 120 },
  'Deluxe Room': { min: 201, max: 220 },
  'Family Suite': { min: 301, max: 310 },
  'Business Suite': { min: 401, max: 410 },
}

function safeParse(value) {
  try {
    return JSON.parse(value)
  } catch (error) {
    return null
  }
}

export function getBookings() {
  if (typeof window === 'undefined') {
    return [...initialBookings]
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    saveBookings(initialBookings)
    return [...initialBookings]
  }

  return safeParse(stored) ?? [...initialBookings]
}

export function saveBookings(bookings) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
}

function getAssignedNumbers(bookings, roomType) {
  return bookings
    .filter((item) => item.roomType === roomType && item.status !== 'Cancelled')
    .map((item) => Number(item.roomNumber))
}

function allocateRoomNumber(roomType, bookings) {
  const range = roomRanges[roomType]
  if (!range) {
    return '000'
  }

  const assigned = new Set(getAssignedNumbers(bookings, roomType))
  for (let number = range.min; number <= range.max; number += 1) {
    if (!assigned.has(number)) {
      return number.toString()
    }
  }

  return 'N/A'
}

export function addBooking(payload) {
  const bookings = getBookings()
  const nextId = bookings.length > 0 ? Math.max(...bookings.map((booking) => booking.id)) + 1 : 1

  const newBooking = {
    id: nextId,
    guestName: payload.guestName,
    email: payload.email,
    roomType: payload.roomType,
    roomNumber: allocateRoomNumber(payload.roomType, bookings),
    status: 'Confirmed',
    checkInDate: payload.checkInDate,
    checkOutDate: payload.checkOutDate,
    guests: payload.guests,
    notes: payload.notes,
    createdAt: new Date().toISOString(),
  }

  const updated = [newBooking, ...bookings]
  saveBookings(updated)
  return newBooking
}

export function cancelBooking(bookingId) {
  const bookings = getBookings()
  const updated = bookings.map((booking) => {
    if (booking.id === bookingId) {
      return { ...booking, status: 'Cancelled' }
    }
    return booking
  })
  saveBookings(updated)
  return updated
}

export function getAvailableCounts() {
  const bookings = getBookings()
  return Object.entries(roomRanges).reduce((summary, [roomType, range]) => {
    const total = range.max - range.min + 1
    const occupied = getAssignedNumbers(bookings, roomType).length
    summary[roomType] = Math.max(total - occupied, 0)
    return summary
  }, {})
}

export const checkInGuest = async (data) => {
  console.log("Checking in guest:", data);
  return { success: true, message: "Check-in successful!" }
}

export const checkOutGuest = async (roomNumber) => {
  console.log("Checking out room:", roomNumber);
  return { success: true, message: "Check-out successful!" }
}
