import { createContext, useContext, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [screening, setScreening] = useState(null);
  const [seats, setSeats] = useState([]);
  const [personal, setPersonal] = useState({});

  const reset = () => {
    setScreening(null);
    setSeats([]);
    setPersonal({});
  };

  return (
    <BookingContext.Provider
      value={{
        screening,
        setScreening,
        seats,
        setSeats,
        personal,
        setPersonal,
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
