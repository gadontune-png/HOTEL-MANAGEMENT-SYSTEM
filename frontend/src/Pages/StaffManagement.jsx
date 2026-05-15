// src/Pages/StaffManagement.jsx
import { useState } from "react"
import StaffTable from "../components/StaffTable"

function StaffManagement() {
  const [staff, setStaff] = useState([
    { id: 1, name: "Morgan", role: "Manager" },
    { id: 2, name: "Nayana", role: "Housekeeper" },
  ])
  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  const addStaff = () => {
    if (!name || !role) return
    setStaff([...staff, { id: Date.now(), name, role }])
    setName("")
    setRole("")
  }

<<<<<<< HEAD
  const deleteStaff = (id) => {
    setStaff(staff.filter(member => member.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
=======
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
>>>>>>> cddfb0de06bd1f47a25b23689907a47593bd2689

      {/* Header */}
      <div className="bg-amber-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Staff Management</h1>
        <p className="text-amber-200">Add, view and remove hotel staff members</p>
      </div>

<<<<<<< HEAD
      <div className="max-w-4xl mx-auto px-4 py-10">
=======
      <StaffTable
        staff={staff}
        deleteStaff={deleteStaff}
      />
>>>>>>> cddfb0de06bd1f47a25b23689907a47593bd2689

        {/* Add Staff Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Staff</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Staff Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={addStaff}
              className="bg-amber-900 hover:bg-amber-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Add Staff
            </button>
          </div>
        </div>

        {/* Staff Table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Staff Members</h2>
            <p className="text-gray-400 text-sm mt-1">{staff.length} staff members</p>
          </div>
          <StaffTable staff={staff} deleteStaff={deleteStaff} />
        </div>

      </div>
    </div>
  )
}

export default StaffManagement