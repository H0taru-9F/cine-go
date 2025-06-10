import { createContext, useContext, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [screening, setScreening] = useState(null);
  const [seats, setSeats] = useState([]);

  const reset = () => {
    setScreening(null);
    setSeats([]);
  };

  return (
    <BookingContext.Provider
      value={{
        screening,
        setScreening,
        seats,
        setSeats,
        reset,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be inside BookingProvider");
  return context;
}
