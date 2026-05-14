import React, { useState } from "react";

// Import room data
import roomsData from "../data/rooms";

// Import log component
import HouseKeepingLog from "../components/HouseKeepingLog";

function Housekeeping() {

  // Store room data in state
  const [rooms, setRooms] = useState(roomsData);

  // Store housekeeping logs
  const [logs, setLogs] = useState([]);

  // Function to update room status
  const updateStatus = (id, newStatus) => {

    // Update room status
    const updatedRooms = rooms.map((room) =>

      room.id === id
        ? { ...room, status: newStatus }
        : room
    );

    // Save updated rooms
    setRooms(updatedRooms);

    // Find updated room
    const updatedRoom = rooms.find(
      (room) => room.id === id
    );

    // Add new activity log
    setLogs([
      ...logs,
      `Room ${updatedRoom.number} marked as ${newStatus}`,
    ]);
  };

  return (
    <div>

      {/* Page heading */}
      <h1>Housekeeping Management</h1>

      {/* Rooms table */}
      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Room</th>
            <th>Type</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>

        <tbody>

          {/* Loop through all rooms */}
          {rooms.map((room) => (

            <tr key={room.id}>

              <td>{room.number}</td>

              <td>{room.type}</td>

              <td>{room.status}</td>

              <td>

                {/* Dropdown for updating room status */}
                <select
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

      {/* Display housekeeping logs */}
      <HouseKeepingLog logs={logs} />

    </div>
  );
}

export default Housekeeping;