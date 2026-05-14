// src/components/Footer.jsx
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 mt-auto">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🏨</span>
            <span className="text-xl font-bold text-white">LuxStay</span>
          </div>
          <p className="text-sm text-amber-200 leading-relaxed">
            Experience world-class hospitality. Your comfort is our priority, 
            every single day.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms</Link></li>
            <li><Link to="/booking" className="hover:text-white transition-colors">Bookings</Link></li>
            <li><Link to="/checkin" className="hover:text-white transition-colors">Check In</Link></li>
            <li><Link to="/checkout" className="hover:text-white transition-colors">Check Out</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-amber-200">
            <li className="flex items-center gap-2">📍 123 Luxury Avenue, Nairobi, Kenya</li>
            <li className="flex items-center gap-2">📞 +254 700 000 000</li>
            <li className="flex items-center gap-2">✉️ info@luxstay.com</li>
            <li className="flex items-center gap-2">🕐 Open 24/7</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800 py-4 text-center text-xs text-amber-300">
        © {new Date().getFullYear()} LuxStay Hotel Management System. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer