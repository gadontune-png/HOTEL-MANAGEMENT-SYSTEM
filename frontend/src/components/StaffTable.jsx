// src/components/StaffTable.jsx
function StaffTable({ staff, deleteStaff }) {
  const roleColors = {
    Manager: 'bg-purple-100 text-purple-700',
    Housekeeper: 'bg-blue-100 text-blue-700',
    Receptionist: 'bg-green-100 text-green-700',
    Security: 'bg-red-100 text-red-700',
  }

  return (
<<<<<<< HEAD
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-amber-50 text-amber-900 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-6 py-3 text-left">#</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Role</th>
            <th className="px-6 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {staff.map((member, index) => (
            <tr key={member.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-gray-400">{index + 1}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-900 text-white flex items-center justify-center font-semibold text-sm">
                    {member.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-800">{member.name}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${roleColors[member.role] || 'bg-gray-100 text-gray-700'}`}>
                  {member.role}
                </span>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => deleteStaff(member.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                >
                  🗑️ Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {staff.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-2">👥</p>
          <p className="text-sm">No staff members yet. Add one above!</p>
        </div>
      )}
    </div>
  )
=======

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
>>>>>>> cddfb0de06bd1f47a25b23689907a47593bd2689
}

export default StaffTable