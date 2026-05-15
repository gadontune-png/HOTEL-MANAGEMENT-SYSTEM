// src/components/RoomStatusCard.jsx
function RoomStatusCard({ title, value, icon, color }) {
  return (
    <div className={`rounded-2xl border-l-4 p-6 shadow-sm ${color} flex items-center gap-4`}>
      <div className="text-4xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
      </div>
    </div>
  )
}

export default RoomStatusCard