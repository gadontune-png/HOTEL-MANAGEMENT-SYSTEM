import React, { useState } from "react";
import StaffTable from "../components/StaffTable";
function StaffManagement() {

  // Staff state
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

  // Form input states
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  // CREATE operation
  const addStaff = () => {

    // Prevent empty input
    if (!name || !role) return;

    // Create new staff object
    const newStaff = {
      id: Date.now(),
      name,
      role,
    };

    // Add new staff to array
    setStaff([...staff, newStaff]);

    // Clear form inputs
    setName("");
    setRole("");
  };

  // DELETE operation
  const deleteStaff = (id) => {

    // Remove selected staff member
    setStaff(
      staff.filter(
        (member) => member.id !== id
      )
    );
  };

  return (
    <div>

      {/* Page heading */}
      <h1>Staff Management</h1>

      {/* Input section */}
      <div>

        {/* Staff name input */}
        <input
          type="text"
          placeholder="Staff Name"

          value={name}

          onChange={(e) =>
            setName(e.target.value)
          }
        />

        {/* Staff role input */}
        <input
          type="text"
          placeholder="Role"

          value={role}

          onChange={(e) =>
            setRole(e.target.value)
          }
        />

        {/* Add button */}
        <button onClick={addStaff}>
          Add Staff
        </button>

      </div>

      {/* Staff table */}
      <StaffTable
        staff={staff}
        deleteStaff={deleteStaff}
      />  

    </div>
  );
}

export default StaffManagement;