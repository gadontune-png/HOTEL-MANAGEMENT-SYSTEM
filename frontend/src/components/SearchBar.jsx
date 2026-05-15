import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [type, setType] = useState('All')
  const [maxPrice, setMaxPrice] = useState(500)

  const handleSearch = () => {
    onSearch({ type, maxPrice })
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-4 items-end">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="All">All Types</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Family">Family</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Max Price: <span className="text-amber-700 font-bold">${maxPrice}</span>/night
        </label>
        <input
          type="range"
          min="50"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-amber-700"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-amber-900 hover:bg-amber-700 text-white font-semibold px-8 py-2.5 rounded-lg transition-colors duration-200"
      >
        🔍 Search
      </button>
    </div>
  )
}

export default SearchBar
