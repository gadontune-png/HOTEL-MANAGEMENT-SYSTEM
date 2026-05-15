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

    </div>
  );
}

export default Housekeeping;