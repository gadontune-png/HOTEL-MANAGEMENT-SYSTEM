export const checkInGuest = async (guestData) => {
  console.log("Sending to backend:", guestData);
  // Remove this once Hillary connects the real API
  return { success: true, message: "Mock check-in success" };
};

export const checkOutGuest = async (roomNumber) => {
  console.log("Checking out room:", roomNumber);
  return { success: true, message: "Mock check-out success" };
};