export const processPayment = async (paymentData) => {
  console.log("Sending payment to backend:", paymentData);
  // Remove this once the real API is ready
  return { success: true, message: "Payment processed successfully", transactionId: "MOCK123" };
};