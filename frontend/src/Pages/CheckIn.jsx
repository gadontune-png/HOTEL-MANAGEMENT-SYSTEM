import { useState } from "react"
import { checkInGuest } from "../services/bookingService";

function CheckIn() {
  const [guestName, setGuestName] = useState("")
  const [roomNumber, setRoomNumber] = useState("")
  const [checkInDate, setCheckInDate] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleCheckin = async (e) => {
    e.preventDefault();
    
    if (!guestName || !roomNumber || !checkInDate) {
      setMessage("Please fill in all fields.")
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await checkInGuest({ guestName, roomNumber, checkInDate })
      setMessage("Check-in successful!")
      
      // Clear form
      setGuestName("")
      setRoomNumber("")
      setCheckInDate("")
    
    } catch (error) {
      setMessage("Check-in failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-12 px-4 min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Guest Check In
        </h2>

        <form onSubmit={handleCheckin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Guest Name
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter guest name"
              className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Number
            </label>
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              placeholder="Enter room number"
              className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check In Date
            </label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 disabled:bg-red-400 transition duration-200 font-semibold shadow-md hover:shadow-lg disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Check In"}
          </button>
        </form>

        {message && (
          <div className={`mt-4 p-3 rounded-lg text-center ${
            message.includes("successful") 
              ? "text-green-700 bg-green-50 border-green-200" 
              : "text-red-700 bg-red-50 border-red-200"
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckIn;