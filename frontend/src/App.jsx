// React hook for shared state
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

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

// Shared room data
import roomsData from './data/rooms'

function App() {

  // Shared room state
  // This allows Dashboard and Housekeeping
  // to use the same room data in real time
  const [rooms, setRooms] =
    useState(roomsData)

  return (

    <Router>

      <Routes>

        {/* Login page - no Navbar or Footer */}
dashboard-and-housekeepinglog
        <Route
          path="/"
          element={<Login />}
        />

        {/* All other pages - with Navbar and Footer */}
        <Route
          path="/*"

          element={

            <div
              className="
              flex
              flex-col
              min-h-screen
              bg-[#EFE3D3]
              "
            >

              {/* Navigation Bar */}
              <Navbar />

              {/* Main Content */}
              <main className="flex-grow">

                <Routes>

                  {/* Home Page */}
                  <Route
                    path="/home"
                    element={<Home />}
                  />

                  {/* Rooms Page */}
                  <Route
                    path="/rooms"
                    element={<Rooms />}
                  />

                  {/* Booking Page */}
                  <Route
                    path="/booking"
                    element={<Booking />}
                  />

                  {/* Check In Page */}
                  <Route
                    path="/checkin"
                    element={<CheckIn />}
                  />

                  {/* Check Out Page */}
                  <Route
                    path="/checkout"
                    element={<CheckOut />}
                  />

                  {/* Dashboard receives shared room data */}
                  <Route
                    path="/dashboard"

                    element={
                      <Dashboard
                        rooms={rooms}
                      />
                    }
                  />

                  {/* Housekeeping can update room data */}
                  <Route
                    path="/housekeeping"

                    element={
                      <Housekeeping
                        rooms={rooms}
                        setRooms={setRooms}
                      />
                    }
                  />

                  {/* Staff Management Page */}
                  <Route
                    path="/staff"
                    element={<StaffManagement />}
                  />

                </Routes>

              </main>

              {/* Footer */}
              <Footer />

            </div>
          }
        />

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