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

  // Occupancy percentage
  const occupancyRate = Math.round(
    (occupiedRooms / totalRooms) * 100
  );

  return (

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

      </div>

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

    </div>
  );
}

export default Dashboard;