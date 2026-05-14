import rooms from "../data/rooms";

export const getRooms = () => {
  return rooms;
};

export const searchRooms = (searchTerm) => {
  return rooms.filter((room) =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getAvailableRooms = () => {
  return rooms.filter((room) => room.available);
};