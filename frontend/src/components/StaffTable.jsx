// src/components/StaffTable.jsx
function StaffTable({ staff, deleteStaff }) {
  const roleColors = {
    Manager: 'bg-purple-100 text-purple-700',
    Housekeeper: 'bg-blue-100 text-blue-700',
    Receptionist: 'bg-green-100 text-green-700',
    Security: 'bg-red-100 text-red-700',
  }

  return (
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
}

export default StaffTable