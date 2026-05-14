import React, { useState, useEffect } from "react";
import RoomCard from "../components/RoomCard";
import SearchBar from "../components/SearchBar";
import {
  getRooms,
  searchRooms,
  getAvailableRooms,
} from "../services/roomService";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    setRooms(getRooms());
  }, []);

  useEffect(() => {
    let filteredRooms = [];

    if (searchTerm) {
      filteredRooms = searchRooms(searchTerm);
    } else {
      filteredRooms = getRooms();
    }

    if (showAvailable) {
      filteredRooms = filteredRooms.filter((room) => room.available);
    }

    setRooms(filteredRooms);
  }, [searchTerm, showAvailable]);

  return (
    <div className="rooms-page">
      <h1>Our Rooms</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <button onClick={() => setShowAvailable(!showAvailable)}>
        {showAvailable ? "Show All Rooms" : "Show Available Rooms"}
      </button>

      <div className="rooms-container">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;