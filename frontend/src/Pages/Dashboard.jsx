import React from "react";

import rooms from "../data/rooms";

// Import reusable component
import RoomStatusCard from "../components/RoomStatusCard";

function Dashboard() {

  // Total rooms
  const totalRooms = rooms.length;

  // Available rooms
  const availableRooms = rooms.filter(
    (room) => room.status === "Clean"
  ).length;

  // Occupied rooms
  const occupiedRooms = rooms.filter(
    (room) => room.status === "Occupied"
  ).length;

  // Dirty rooms
  const dirtyRooms = rooms.filter(
    (room) => room.status === "Dirty"
  ).length;

  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>

      <div className="dashboard-cards">

        {/* Reusable cards */}

        <RoomStatusCard
          title="Total Rooms"
          value={totalRooms}
        />

        <RoomStatusCard
          title="Available Rooms"
          value={availableRooms}
        />

        <RoomStatusCard
          title="Occupied Rooms"
          value={occupiedRooms}
        />

        <RoomStatusCard
          title="Needs Cleaning"
          value={dirtyRooms}
        />

      </div>
    </div>
  );
}

export default Dashboard;