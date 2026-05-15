import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Booking from "./Pages/Booking";
import Payment from "./Pages/payment";
import CheckIn from "./Pages/CheckIn";
import CheckOut from "./Pages/CheckOut";
import Dashboard from "./Pages/Dashboard";
import Housekeeping from "./Pages/Housekeeping";
import StaffManagement from "./Pages/StaffManagement";

// Shared room data
import roomsData from "./data/rooms";

function App() {
  const [rooms, setRooms] = useState(roomsData);

  return (
    <Router>
      <Routes>

        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Main App Pages */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen bg-[#EFE3D3]">

              <Navbar />

              <main className="flex-grow">
                <Routes>

                  <Route path="/home" element={<Home />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/checkin" element={<CheckIn />} />
                  <Route path="/checkout" element={<CheckOut />} />

                  <Route
                    path="/dashboard"
                    element={<Dashboard rooms={rooms} />}
                  />

                  <Route
                    path="/housekeeping"
                    element={
                      <Housekeeping
                        rooms={rooms}
                        setRooms={setRooms}
                      />
                    }
                  />

                  <Route
                    path="/staff"
                    element={<StaffManagement />}
                  />

                </Routes>
              </main>

              <Footer />

            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;