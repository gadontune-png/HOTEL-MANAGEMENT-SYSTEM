// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Login from './Pages/Login'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import Booking from './Pages/Booking'
import Payment from './Pages/payment'
import CheckIn from './Pages/CheckIn'
import CheckOut from './Pages/CheckOut'
import Dashboard from './Pages/Dashboard'
import Housekeeping from './Pages/Housekeeping'
import StaffManagement from './Pages/StaffManagement'

function App() {
  return (
    <Router>
      <Routes>

        {/* Login page - no Navbar or Footer */}
        <Route path="/login" element={<Login/>} />

        {/* All other pages - with Navbar and Footer */}
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/checkin" element={<CheckIn />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/housekeeping" element={<Housekeeping />} />
                <Route path="/staff" element={<StaffManagement />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />

      </Routes>
    </Router>
  )
}

export default App