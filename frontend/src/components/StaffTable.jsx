import React from "react";

function StaffTable({ staff, deleteStaff }) {

  return (
    <table border="1" cellPadding="10">

      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {staff.map((member) => (

          <tr key={member.id}>

            <td>{member.name}</td>

            <td>{member.role}</td>

            <td>

              <button
                onClick={() =>
                  deleteStaff(member.id)
                }
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>
    </table>
  );
}

export default StaffTable;