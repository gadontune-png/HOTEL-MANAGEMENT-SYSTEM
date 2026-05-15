// src/Pages/Rooms.jsx
import { useState } from 'react'
import rooms from '../data/rooms'
import RoomCard from '../components/RoomCard'
import SearchBar from '../components/SearchBar'

function Rooms() {
  const [filteredRooms, setFilteredRooms] = useState(rooms)

  const handleSearch = ({ type, maxPrice }) => {
    const results = rooms.filter(room => {
      const matchType = type === 'All' || room.type === type
      const matchPrice = room.price <= maxPrice
      return matchType && matchPrice
    })
    setFilteredRooms(results)
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-amber-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Our Rooms</h1>
        <p className="text-amber-200">Find the perfect room for your stay</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto px-4 -mt-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Rooms Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {filteredRooms.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-xl font-medium">No rooms match your search.</p>
            <p className="text-sm mt-2">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Rooms