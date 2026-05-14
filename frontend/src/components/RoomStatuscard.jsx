import React from "react";

// Reusable card component

function RoomStatusCard({ title, value }) {

  return (
    <div className="card">

      {/* Card value */}
      <h2>{value}</h2>

      {/* Card title */}
      <p>{title}</p>

    </div>
  );
}

export default RoomStatusCard;