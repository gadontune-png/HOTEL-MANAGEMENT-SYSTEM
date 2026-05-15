import rooms from "../data/rooms"
import RoomStatusCard from "../components/RoomStatusCard"

function Dashboard() {
  const totalRooms = rooms.length
  const availableRooms = rooms.filter(r => r.status === "available").length
  const occupiedRooms = rooms.filter(r => r.status === "booked").length
  const maintenanceRooms = rooms.filter(r => r.status === "maintenance").length

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-amber-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-amber-200">Hotel operations overview</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RoomStatusCard title="Total Rooms" value={totalRooms} icon="🏨" color="bg-blue-50 border-blue-400" />
          <RoomStatusCard title="Available" value={availableRooms} icon="✅" color="bg-green-50 border-green-400" />
          <RoomStatusCard title="Occupied" value={occupiedRooms} icon="🛌" color="bg-amber-50 border-amber-400" />
          <RoomStatusCard title="Maintenance" value={maintenanceRooms} icon="🔧" color="bg-red-50 border-red-400" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Room Status Overview</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-amber-50 text-amber-900 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">Room ID</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Type</th>
                  <th className="px-6 py-3 text-left">Floor</th>
                  <th className="px-6 py-3 text-left">Price/Night</th>
                  <th className="px-6 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rooms.map(room => (
                  <tr key={room.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">#{room.id}</td>
                    <td className="px-6 py-4 text-gray-600">{room.name}</td>
                    <td className="px-6 py-4 text-gray-600">{room.type}</td>
                    <td className="px-6 py-4 text-gray-600">Floor {room.floor}</td>
                    <td className="px-6 py-4 text-amber-700 font-semibold">${room.price}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize
                        ${room.status === 'available' ? 'bg-green-100 text-green-700' :
                          room.status === 'booked' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'}`}>
                        {room.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
