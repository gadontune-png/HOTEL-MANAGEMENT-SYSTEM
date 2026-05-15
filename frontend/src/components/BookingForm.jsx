import { useState } from 'react'

const roomOptions = [
  'Standard Room',
  'Deluxe Room',
  'Family Suite',
  'Business Suite',
]

function BookingForm({ onAddBooking }) {
  const [form, setForm] = useState({
    guestName: '',
    email: '',
    roomType: 'Standard Room',
    checkInDate: '',
    checkOutDate: '',
    guests: '1 adult',
    notes: '',
  })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.guestName.trim() || !form.email.trim() || !form.checkInDate || !form.checkOutDate) {
      setError('Please fill in all required fields before submitting.')
      return
    }

    if (new Date(form.checkOutDate) <= new Date(form.checkInDate)) {
      setError('Check-out must be later than check-in.')
      return
    }

    setError('')
    onAddBooking(form)
    setForm({
      guestName: '',
      email: '',
      roomType: 'Standard Room',
      checkInDate: '',
      checkOutDate: '',
      guests: '1 adult',
      notes: '',
    })
  }

  return (
    <div className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-amber-900 mb-4">Create new booking</h2>
      <p className="text-sm text-slate-500 mb-5">Add guest details and reserve a room with instant confirmation.</p>

      {error && (
        <div className="mb-4 rounded-xl bg-red-100 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700">
            Guest name
            <input
              type="text"
              name="guestName"
              value={form.guestName}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
              placeholder="Enter full name"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-700">
            Email address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
              placeholder="guest@example.com"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700">
            Room type
            <select
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
            >
              {roomOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm text-slate-700">
            Guests
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
            >
              <option>1 adult</option>
              <option>2 adults</option>
              <option>2 adults, 1 child</option>
              <option>2 adults, 2 children</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700">
            Check-in date
            <input
              type="date"
              name="checkInDate"
              value={form.checkInDate}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-700">
            Check-out date
            <input
              type="date"
              name="checkOutDate"
              value={form.checkOutDate}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm text-slate-700">
          Booking notes
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
            rows="4"
            placeholder="Special requests, room setup, or guest comments"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-2xl bg-amber-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
        >
          Confirm booking
        </button>
      </form>
    </div>
  )
}

export default BookingForm
