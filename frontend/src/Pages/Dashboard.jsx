import React from "react";

import rooms from "../data/rooms";

import RoomStatuscard from "../components/RoomStatuscard.jsx";

function Dashboard() {

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
        Admin Dashboard
      </h1>

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

    </div>
  );
}

export default Dashboard;