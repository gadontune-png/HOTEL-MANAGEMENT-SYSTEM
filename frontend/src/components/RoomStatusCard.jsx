import React from "react";

function RoomStatusCard({ title, value }) {

  return (

    <div
      className="
      bg-[#FDF6EC]
      p-6
      rounded-2xl
      shadow-lg
      border
      border-[#C4A484]
      hover:scale-105
      transition
      duration-300
      "
    >

      <h2
        className="
        text-4xl
        font-bold
        text-[#7B3F00]
        "
      >
        {value}
      </h2>

      <p
        className="
        text-[#6D4C41]
        mt-3
        text-lg
        "
      >
        {title}
      </p>

    </div>
  );
}

export default RoomStatusCard;