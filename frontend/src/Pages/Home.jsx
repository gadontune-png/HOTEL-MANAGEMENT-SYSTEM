// src/Pages/Home.jsx
import { Link } from 'react-router-dom'
import rooms from '../data/rooms'

function Home() {
  const featuredRooms = rooms.filter(r => r.status === 'available').slice(0, 4)
  const availableCount = rooms.filter(r => r.status === 'available').length

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600')`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Welcome to LuxStay
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience True <br />
            <span className="text-amber-400">Luxury</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Discover world-class comfort, elegance, and hospitality. 
            Your perfect stay is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rooms"
              className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              🛏️ Browse Rooms
            </Link>
            <Link
              to="/booking"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-900 font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              📅 Book Now
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-2xl">
          ↓
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-amber-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-amber-300">{availableCount}+</p>
            <p className="text-sm text-amber-100 mt-1">Available Rooms</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-300">4</p>
            <p className="text-sm text-amber-100 mt-1">Room Types</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-300">24/7</p>
            <p className="text-sm text-amber-100 mt-1">Room Service</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-300">★ 4.9</p>
            <p className="text-sm text-amber-100 mt-1">Guest Rating</p>
          </div>
        </div>
      </div>

      {/* Featured Rooms */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-2">
            Our Rooms
          </p>
          <h2 className="text-4xl font-bold text-gray-800">Featured Rooms</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Choose from our selection of carefully designed rooms built for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRooms.map(room => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Available
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{room.name}</h3>
                <p className="text-gray-400 text-xs mt-1">{room.size} · Up to {room.capacity} guests</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-amber-700 font-bold">${room.price}<span className="text-gray-400 font-normal text-xs">/night</span></p>
                  <Link
                    to="/booking"
                    className="bg-amber-900 text-white text-xs px-3 py-1.5 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/rooms"
            className="inline-block border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Rooms →
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-2">
              Why LuxStay
            </p>
            <h2 className="text-4xl font-bold text-gray-800">The LuxStay Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Award Winning</h3>
              <p className="text-gray-500 text-sm">Recognized as one of the best hotels in the region for 5 consecutive years.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">World Class Dining</h3>
              <p className="text-gray-500 text-sm">Enjoy gourmet meals prepared by our award-winning chefs every day.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Safe & Secure</h3>
              <p className="text-gray-500 text-sm">Your safety is our top priority with 24/7 security and surveillance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600')`
        }}
      >
        <div className="absolute inset-0 bg-amber-950/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">Ready for an Unforgettable Stay?</h2>
          <p className="text-amber-200 mb-8 max-w-xl mx-auto">
            Book your room today and experience the finest hospitality Nairobi has to offer.
          </p>
          <Link
            to="/booking"
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-xl"
          >
            Reserve Your Room Now
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home