import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} className="room-image" />

      <div className="room-details">
        <h2>{room.name}</h2>
        <p>Type: {room.type}</p>
        <p>Price: ${room.price} per night</p>

        <p>
          Status:
          {room.available ? (
            <span className="available"> Available</span>
          ) : (
            <span className="unavailable"> Occupied</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default RoomCard;