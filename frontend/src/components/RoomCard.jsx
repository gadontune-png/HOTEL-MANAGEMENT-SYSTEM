import { Link } from 'react-router-dom'

function RoomCard({ room }) {
  const statusColors = {
    available: 'bg-green-500',
    booked: 'bg-red-500',
    maintenance: 'bg-yellow-500',
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden h-52">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className={`absolute top-3 right-3 ${statusColors[room.status]} text-white text-xs px-3 py-1 rounded-full capitalize`}>
          {room.status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800">{room.name}</h3>
        <p className="text-gray-400 text-xs mt-1">{room.size} · Floor {room.floor} · Up to {room.capacity} guests</p>
        <p className="text-gray-500 text-sm mt-3 line-clamp-2">{room.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {room.amenities.slice(0, 3).map((a, i) => (
            <span key={i} className="bg-amber-50 text-amber-700 text-xs px-2 py-0.5 rounded-full">{a}</span>
          ))}
          {room.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">+{room.amenities.length - 3} more</span>
          )}
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className="text-amber-700 font-bold text-lg">${room.price}<span className="text-gray-400 font-normal text-sm">/night</span></p>
          {room.status === 'available' ? (
            <Link to="/booking" className="bg-amber-900 hover:bg-amber-700 text-white text-sm px-5 py-2 rounded-full transition-colors">Book Now</Link>
          ) : (
            <span className="text-gray-400 text-sm px-5 py-2 border border-gray-200 rounded-full">Unavailable</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default RoomCard
