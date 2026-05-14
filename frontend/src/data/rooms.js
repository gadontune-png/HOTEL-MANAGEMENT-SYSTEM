// This file stores room data for the hotel system.
// We export the data so other pages can use it.

const rooms = [
  {
    id: 1,
    number: 101,
    type: "Standard",
    status: "Clean",
  },

  {
    id: 2,
    number: 102,
    type: "Deluxe",
    status: "Dirty",
  },

  {
    id: 3,
    number: 201,
    type: "Family Suite",
    status: "Occupied",
  },

  {
    id: 4,
    number: 301,
    type: "Business Suite",
    status: "Maintenance",
  },
];

// Exporting room data so it can be used in other files
export default rooms;