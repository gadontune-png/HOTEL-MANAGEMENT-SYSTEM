<<<<<<< HEAD
// src/Pages/Housekeeping.jsx
import { useState } from "react"
import roomsData from "../data/rooms"
import HouseKeepingLog from "../components/HouseKeepingLog"

function Housekeeping() {
  const [rooms, setRooms] = useState(roomsData)
  const [logs, setLogs] = useState([])

  const updateStatus = (id, newStatus) => {
    const updatedRooms = rooms.map(room =>
      room.id === id ? { ...room, status: newStatus } : room
    )
    setRooms(updatedRooms)
    const updatedRoom = rooms.find(room => room.id === id)
    setLogs([...logs, `Room ${updatedRoom.id} marked as ${newStatus} at ${new Date().toLocaleTimeString()}`])
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-amber-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Housekeeping</h1>
        <p className="text-amber-200">Manage and update room cleaning status</p>
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Room Status</h2>
            <p className="text-gray-400 text-sm mt-1">Update housekeeping status for each room</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-amber-50 text-amber-900 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">Room ID</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Type</th>
                  <th className="px-6 py-3 text-left">Current Status</th>
                  <th className="px-6 py-3 text-left">Update Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rooms.map(room => (
                  <tr key={room.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">#{room.id}</td>
                    <td className="px-6 py-4 text-gray-600">{room.name}</td>
                    <td className="px-6 py-4 text-gray-600">{room.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize
                        ${room.status === 'available' ? 'bg-green-100 text-green-700' :
                          room.status === 'booked' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={room.status}
                        onChange={(e) => updateStatus(room.id, e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="available">Available</option>
                        <option value="booked">Booked</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Logs */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Activity Log</h2>
          {logs.length === 0 ? (
            <p className="text-gray-400 text-sm">No activity yet. Update a room status to see logs.</p>
          ) : (
            <ul className="space-y-2">
              {logs.map((log, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-amber-500">📋</span> {log}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
=======
import React, { useState } from "react";

import HouseKeepingLog from "../components/HouseKeepingLog";

function Housekeeping({
  rooms,
  setRooms,
}) {

  const [logs, setLogs] = useState([]);

  // Update room status
  const updateStatus = (id, newStatus) => {

    const updatedRooms = rooms.map((room) =>

      room.id === id
        ? { ...room, status: newStatus }
        : room
    );

    setRooms(updatedRooms);

    const updatedRoom = rooms.find(
      (room) => room.id === id
    );

    setLogs([
      ...logs,
      `Room ${updatedRoom.number} marked as ${newStatus}`,
    ]);
  };

  return (

    <div className="min-h-screen bg-[#EFE3D3] p-8">

      <h1
        className="
        text-5xl
        font-bold
        text-[#5C2E2E]
        mb-10
        "
      >
        Housekeeping Management
      </h1>

      <div
        className="
        bg-[#FDF6EC]
        rounded-2xl
        shadow-lg
        overflow-hidden
        border
        border-[#C4A484]
        "
      >

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

              <th className="p-4 text-left">
                Update Status
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

                <td className="p-4">

                  <select
                    className="
                    border
                    border-[#C4A484]
                    rounded-lg
                    px-3
                    py-2
                    bg-[#FFF8F0]
                    text-[#5C4033]
                    "
                    value={room.status}
                    onChange={(e) =>
                      updateStatus(
                        room.id,
                        e.target.value
                      )
                    }
                  >
                    <option>Clean</option>
                    <option>Dirty</option>
                    <option>Occupied</option>
                    <option>Maintenance</option>
                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Logs */}
      <HouseKeepingLog logs={logs} />
>>>>>>> cddfb0de06bd1f47a25b23689907a47593bd2689

    </div>
  )
}

export default Housekeeping