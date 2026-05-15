import { useEffect, useMemo, useState } from 'react'
import BookingForm from '../components/BookingForm'
import Notification from '../components/Notification'
import {
  addBooking,
  cancelBooking,
  getAvailableCounts,
  getBookings,
} from '../services/bookingService'

const roomTypeOptions = ['All room types', 'Standard Room', 'Deluxe Room', 'Family Suite', 'Business Suite']
const statusOptions = ['All statuses', 'Confirmed', 'Cancelled']

function Booking() {
  const [bookings, setBookings] = useState([])
  const [roomFilter, setRoomFilter] = useState('All room types')
  const [statusFilter, setStatusFilter] = useState('All statuses')
  const [searchQuery, setSearchQuery] = useState('')
  const [notification, setNotification] = useState(null)
  const [availability, setAvailability] = useState({})

  useEffect(() => {
    const data = getBookings()
    setBookings(data)
    setAvailability(getAvailableCounts())
  }, [])

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesRoom = roomFilter === 'All room types' || booking.roomType === roomFilter
      const matchesStatus = statusFilter === 'All statuses' || booking.status === statusFilter
      const matchesSearch = [booking.guestName, booking.email, booking.roomType, booking.roomNumber]
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      return matchesRoom && matchesStatus && matchesSearch
    })
  }, [bookings, roomFilter, searchQuery, statusFilter])

  const handleAddBooking = (formData) => {
    const newBooking = addBooking(formData)
    const updated = [newBooking, ...bookings]
    setBookings(updated)
    setAvailability(getAvailableCounts())
    setNotification({
      title: 'Booking confirmed',
      message: `Reservation confirmed for ${newBooking.guestName} in ${newBooking.roomType}. Room ${newBooking.roomNumber} has been assigned.`,
      type: 'success',
    })
  }

  const handleCancel = (bookingId) => {
    cancelBooking(bookingId)
    const updated = bookings.map((item) =>
      item.id === bookingId ? { ...item, status: 'Cancelled' } : item,
    )
    setBookings(updated)
    setAvailability(getAvailableCounts())
    setNotification({
      title: 'Booking cancelled',
      message: 'The reservation has been marked as cancelled and the room will be made available again.',
      type: 'info',
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 rounded-[2rem] bg-gradient-to-r from-amber-900 via-amber-700 to-yellow-500 p-10 text-white shadow-lg">
        <h1 className="text-4xl font-bold">Bookings</h1>
        <p className="mt-3 max-w-2xl text-base text-amber-100">
          Manage reservations, confirm new guests, and keep track of booking status in real time.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <section>
          <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Available Standard</p>
              <p className="mt-3 text-3xl font-semibold text-amber-900">{availability['Standard Room'] ?? 0}</p>
            </div>
            <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Available Deluxe</p>
              <p className="mt-3 text-3xl font-semibold text-amber-900">{availability['Deluxe Room'] ?? 0}</p>
            </div>
            <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Available Family</p>
              <p className="mt-3 text-3xl font-semibold text-amber-900">{availability['Family Suite'] ?? 0}</p>
            </div>
            <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Available Business</p>
              <p className="mt-3 text-3xl font-semibold text-amber-900">{availability['Business Suite'] ?? 0}</p>
            </div>
          </div>

          <div className="mb-6 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Booking records</h2>
                <p className="text-sm text-slate-500">Search and filter current reservations.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search guest, room, or email"
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
                />
                <select
                  value={roomFilter}
                  onChange={(event) => setRoomFilter(event.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
                >
                  {roomTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {notification && (
            <div className="mb-6">
              <Notification
                title={notification.title}
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification(null)}
              />
            </div>
          )}

          <div className="space-y-5">
            {filteredBookings.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
                No bookings match your current filters. Try clearing the search or changing the room type.
              </div>
            ) : (
              filteredBookings.map((booking) => (
                <div key={booking.id} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{booking.roomType}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">{booking.guestName}</h3>
                      <p className="mt-1 text-sm text-slate-600">{booking.email}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                      <span className="rounded-full bg-slate-100 px-3 py-1">Room {booking.roomNumber}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">{booking.guests}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">{booking.status}</span>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Check-in</p>
                      <p className="mt-2 text-sm font-medium text-slate-900">{booking.checkInDate}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Check-out</p>
                      <p className="mt-2 text-sm font-medium text-slate-900">{booking.checkOutDate}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-500">{booking.notes || 'No special notes.'}</p>
                    <button
                      type="button"
                      onClick={() => handleCancel(booking.id)}
                      disabled={booking.status === 'Cancelled'}
                      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition ${
                        booking.status === 'Cancelled'
                          ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                          : 'bg-red-600 text-white hover:bg-red-700'
                      }`}
                    >
                      {booking.status === 'Cancelled' ? 'Already cancelled' : 'Cancel booking'}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <aside>
          <BookingForm onAddBooking={handleAddBooking} />
        </aside>
      </div>
    </div>
  )
}

export default Booking
