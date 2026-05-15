import { useState } from "react";
import { processPayment } from "../services/paymentService";

export default function PaymentForm() {
  const [room, setRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rate, setRate] = useState('2000'); // per night, set default for testing
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const total = nights * Number(rate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!room || !checkIn || !checkOut || nights <= 0) {
      setMessage("Please enter valid dates and room");
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await processPayment({ 
        roomNumber: room, 
        amount: total,
        nights,
        rate: Number(rate)
      });
      
      setMessage(res.message || "Payment successful!");
      
      if (res.success !== false) {
        setReceipt({
          roomNumber: room,
          checkIn,
          checkOut,
          nights,
          rate: Number(rate),
          total,
          transactionId: res.transactionId || `TXN${Date.now()}`
        });
        
        setRoom('');
        setCheckIn('');
        setCheckOut('');
        setRate('2000');
      }
    } catch (err) {
      setMessage("Payment failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Process Payment
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Room Number</label>
            <input
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn}
                className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rate per Night (Ksh)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              min="0"
              required
            />
          </div>

          {nights > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{nights} night{nights > 1 ? 's' : ''} × Ksh{rate}</span>
                <span className="font-bold text-gray-800">Total: Ksh{total.toLocaleString()}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || nights <= 0}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : `Pay Ksh${total.toLocaleString()}`}
          </button>
        </form>

        {message && (
          <div className={`mt-4 p-3 rounded-lg text-center ${
            message.toLowerCase().includes("success") 
              ? "bg-green-50 text-green-700" 
              : "bg-red-50 text-red-700"
          }`}>
            {message}
          </div>
        )}

        {receipt && (
          <div className="mt-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold text-gray-800 mb-3 text-center">Payment Receipt</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Room:</span> <span>{receipt.roomNumber}</span></div>
              <div className="flex justify-between"><span>Check In:</span> <span>{receipt.checkIn}</span></div>
              <div className="flex justify-between"><span>Check Out:</span> <span>{receipt.checkOut}</span></div>
              <div className="flex justify-between"><span>Nights:</span> <span>{receipt.nights}</span></div>
              <div className="flex justify-between"><span>Rate:</span> <span>Ksh{receipt.rate}</span></div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total Paid:</span> <span>Ksh{receipt.total.toLocaleString()}</span>
              </div>
              <div className="text-xs text-gray-500 text-center pt-2">
                Transaction ID: {receipt.transactionId}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}