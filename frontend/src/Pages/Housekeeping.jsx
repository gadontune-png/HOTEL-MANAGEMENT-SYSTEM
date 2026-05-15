import { useState } from "react"
import roomsData from "../data/rooms"
import HouseKeepingLog from "../components/HouseKeepingLog"

function Housekeeping() {
  const [rooms, setRooms] = useState(roomsData)
  const [logs, setLogs] = useState([])

  const updateStatus = (id, newStatus) => {
    const updatedRooms = rooms.map(room =>
      room.id === id ? { ...room, status: newStatus } : room
    )
    setRooms(updatedRooms)
    const updatedRoom = rooms.find(room => room.id === id)
    setLogs([...logs, `Room ${updatedRoom.id} marked as ${newStatus} at ${new Date().toLocaleTimeString()}`])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-amber-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Housekeeping</h1>
        <p className="text-amber-200">Manage and update room cleaning status</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Room Status</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-amber-50 text-amber-900 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">Room ID</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Type</th>
                  <th className="px-6 py-3 text-left">Current Status</th>
                  <th className="px-6 py-3 text-left">Update Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rooms.map(room => (
                  <tr key={room.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">#{room.id}</td>
                    <td className="px-6 py-4 text-gray-600">{room.name}</td>
                    <td className="px-6 py-4 text-gray-600">{room.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize
                        ${room.status === 'available' ? 'bg-green-100 text-green-700' :
                          room.status === 'booked' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={room.status}
                        onChange={(e) => updateStatus(room.id, e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="available">Available</option>
                        <option value="booked">Booked</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Activity Log</h2>
          {logs.length === 0 ? (
            <p className="text-gray-400 text-sm">No activity yet.</p>
          ) : (
            <ul className="space-y-2">
              {logs.map((log, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-amber-500">📋</span> {log}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Housekeeping
