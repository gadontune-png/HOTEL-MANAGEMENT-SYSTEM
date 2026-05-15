import { useState, useEffect } from 'react'
import RoomCard from '../components/RoomCard'
import SearchBar from '../components/SearchBar'
import roomService from '../services/roomService'

function Rooms() {
  const [filteredRooms, setFilteredRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    roomService.getAllRooms().then(data => {
      setFilteredRooms(data)
      setLoading(false)
    })
  }, [])

  const handleSearch = async ({ type, maxPrice }) => {
    const results = await roomService.filterRooms({ type, maxPrice })
    setFilteredRooms(results)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-amber-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Our Rooms</h1>
        <p className="text-amber-200">Find the perfect room for your stay</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 -mt-6">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading rooms...</div>
        ) : filteredRooms.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-xl font-medium">No rooms match your search.</p>
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
