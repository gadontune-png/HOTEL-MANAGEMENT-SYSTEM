
export const checkInGuest = async (data) => {
  console.log("Checking in guest:", data);
  return { success: true, message: "Check-in successful!" }
}

export const checkOutGuest = async (roomNumber) => {
  console.log("Checking out room:", roomNumber);
  return { success: true, message: "Check-out successful!" }
}
