import React from "react";

function StaffTable({ staff, deleteStaff }) {

  return (

    <div
      className="
      bg-[#FDF6EC]
      rounded-2xl
      shadow-lg
      overflow-hidden
      mt-8
      border
      border-[#C4A484]
      "
    >

      <table className="w-full">

        <thead className="bg-[#5C2E2E] text-white">

          <tr>
            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Role
            </th>

            <th className="p-4 text-left">
              Action
            </th>
          </tr>

        </thead>

        <tbody>

          {staff.map((member) => (

            <tr
              key={member.id}
              className="
              border-b
              border-[#D7B899]
              hover:bg-[#F5E6D3]
              transition
              "
            >

              <td className="p-4 text-[#5C4033]">
                {member.name}
              </td>

              <td className="p-4 text-[#5C4033]">
                {member.role}
              </td>

              <td className="p-4">

                <button
                  className="
                  bg-[#8B0000]
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  hover:bg-[#6E0000]
                  transition
                  "
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

    </div>
  );
}

export default StaffTable;