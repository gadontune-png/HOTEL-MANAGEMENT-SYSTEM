<<<<<<< HEAD
// src/Pages/Dashboard.jsx
import rooms from "../data/rooms"
import RoomStatusCard from "../components/RoomStatusCard"

function Dashboard() {
  const totalRooms = rooms.length
  const availableRooms = rooms.filter(r => r.status === "available").length
  const occupiedRooms = rooms.filter(r => r.status === "booked").length
  const maintenanceRooms = rooms.filter(r => r.status === "maintenance").length
=======
import React from "react";

import RoomStatuscard from "../components/RoomStatuscard.jsx";

import RecentActivity from "../components/RecentActivity";

function Dashboard({ rooms }) {

  // Dashboard statistics
  const totalRooms = rooms.length;

  const availableRooms = rooms.filter(
    (room) => room.status === "Clean"
  ).length;

  const occupiedRooms = rooms.filter(
    (room) => room.status === "Occupied"
  ).length;

  const dirtyRooms = rooms.filter(
    (room) => room.status === "Dirty"
  ).length;
>>>>>>> cddfb0de06bd1f47a25b23689907a47593bd2689

  // Occupancy percentage
  const occupancyRate = Math.round(
    (occupiedRooms / totalRooms) * 100
  );

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
=======

    <div className="min-h-screen bg-[#EFE3D3] p-8">

      {/* Header */}
      <div
        className="
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        mb-10
        "
      >

        <div>

          <h1
            className="
            text-5xl
            font-bold
            text-[#5C2E2E]
            "
          >
            Admin Dashboard
          </h1>

          <p
            className="
            text-[#6D4C41]
            mt-2
            text-lg
            "
          >
            Luxury Hotel Management System
          </p>

        </div>

        {/* Occupancy Badge */}
        <div
          className="
          bg-[#7B3F00]
          text-white
          px-6
          py-3
          rounded-xl
          shadow-md
          mt-4
          md:mt-0
          "
        >
          Occupancy: {occupancyRate}%
        </div>

      </div>

      {/* Dashboard Cards */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        "
      >

        <RoomStatuscard
          title="Total Rooms"
          value={totalRooms}
        />

        <RoomStatuscard
          title="Available Rooms"
          value={availableRooms}
        />

        <RoomStatuscard
          title="Occupied Rooms"
          value={occupiedRooms}
        />

        <RoomStatuscard
          title="Needs Cleaning"
          value={dirtyRooms}
        />
>>>>>>> cddfb0de06bd1f47a25b23689907a47593bd2689

      {/* Header */}
      <div className="bg-amber-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-amber-200">Hotel operations overview</p>
      </div>

<<<<<<< HEAD
      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RoomStatusCard title="Total Rooms" value={totalRooms} icon="🏨" color="bg-blue-50 border-blue-400" />
          <RoomStatusCard title="Available" value={availableRooms} icon="✅" color="bg-green-50 border-green-400" />
          <RoomStatusCard title="Occupied" value={occupiedRooms} icon="🛌" color="bg-amber-50 border-amber-400" />
          <RoomStatusCard title="Maintenance" value={maintenanceRooms} icon="🔧" color="bg-red-50 border-red-400" />
        </div>
      </div>

      {/* Rooms Table */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Room Status Overview</h2>
            <p className="text-gray-400 text-sm mt-1">Current status of all rooms</p>
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
=======
      {/* Room Status Overview */}
      <div
        className="
        mt-10
        bg-[#FDF6EC]
        rounded-2xl
        shadow-lg
        border
        border-[#C4A484]
        overflow-hidden
        "
      >

        <div
          className="
          bg-[#5C2E2E]
          text-white
          px-6
          py-4
          text-2xl
          font-bold
          "
        >
          Room Status Overview
        </div>

        <table className="w-full">

          <thead className="bg-[#7B3F00] text-white">

            <tr>
              <th className="p-4 text-left">
                Room
              </th>

              <th className="p-4 text-left">
                Type
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>

          </thead>

          <tbody>

            {rooms.map((room) => (

              <tr
                key={room.id}
                className="
                border-b
                border-[#D7B899]
                hover:bg-[#F5E6D3]
                transition
                "
              >

                <td className="p-4 text-[#5C4033]">
                  {room.number}
                </td>

                <td className="p-4 text-[#5C4033]">
                  {room.type}
                </td>

                <td className="p-4">

                  <span
                    className={`
                    px-4
                    py-2
                    rounded-full
                    text-white
                    text-sm
                    font-semibold

                    ${
                      room.status === "Clean"
                        ? "bg-green-600"
                        : room.status === "Dirty"
                        ? "bg-red-600"
                        : room.status === "Occupied"
                        ? "bg-[#8B0000]"
                        : "bg-orange-500"
                    }
                    `}
                  >
                    {room.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Recent Activity */}
      <RecentActivity />
>>>>>>> cddfb0de06bd1f47a25b23689907a47593bd2689

    </div>
  )
}

export default Dashboard