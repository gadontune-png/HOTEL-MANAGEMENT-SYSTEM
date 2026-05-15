import React, { useState } from "react";

import StaffTable from "../components/StaffTable";

function StaffManagement() {

  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "John",
      role: "Manager",
    },

    {
      id: 2,
      name: "Mary",
      role: "Housekeeper",
    },
  ]);

  const [name, setName] = useState("");

  const [role, setRole] = useState("");

  const addStaff = () => {

    if (!name || !role) return;

    const newStaff = {
      id: Date.now(),
      name,
      role,
    };

    setStaff([...staff, newStaff]);

    setName("");

    setRole("");
  };

  const deleteStaff = (id) => {

    setStaff(
      staff.filter(
        (member) => member.id !== id
      )
    );
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
        Staff Management
      </h1>

      <div
        className="
        bg-[#FDF6EC]
        p-6
        rounded-2xl
        shadow-lg
        flex
        flex-col
        md:flex-row
        gap-4
        border
        border-[#C4A484]
        "
      >

        <input
          className="
          border
          border-[#C4A484]
          rounded-lg
          px-4
          py-3
          flex-1
          bg-[#FFF8F0]
          text-[#5C4033]
          focus:outline-none
          focus:ring-2
          focus:ring-[#7B3F00]
          "
          type="text"
          placeholder="Staff Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="
          border
          border-[#C4A484]
          rounded-lg
          px-4
          py-3
          flex-1
          bg-[#FFF8F0]
          text-[#5C4033]
          focus:outline-none
          focus:ring-2
          focus:ring-[#7B3F00]
          "
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        />

        <button
          className="
          bg-[#7B3F00]
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-[#5E2D00]
          transition
          "
          onClick={addStaff}
        >
          Add Staff
        </button>

      </div>

      <StaffTable
        staff={staff}
        deleteStaff={deleteStaff}
      />

    </div>
  );
}

export default StaffManagement;