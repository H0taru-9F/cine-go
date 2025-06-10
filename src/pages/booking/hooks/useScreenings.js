import { useEffect, useMemo, useState } from "react";
import { format, parseISO } from "date-fns";
import { useBooking } from "@/components/booking-context/BookingContext.jsx";

export function useScreenings(screenings = []) {
  const dates = useMemo(() => {
    const set = new Set(screenings.map((s) => s.date));
    return Array.from(set).sort();
  }, [screenings]);

  const [selectedDate, setSelectedDate] = useState(dates[0] || null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { setScreening } = useBooking();

  useEffect(() => {
    setSelectedTime(null);
  }, [selectedDate]);

  const times = useMemo(() => {
    if (!selectedDate) return [];
    return screenings
      .filter((s) => s.date === selectedDate)
      .map((s) => format(parseISO(`${s.date}T${s.time}`), "HH:mm"))
      .sort();
  }, [screenings, selectedDate]);

  const handleContinue = () => {
    const chosen = screenings.find(
      (s) =>
        s.date === selectedDate &&
        format(parseISO(`${s.date}T${s.time}`), "HH:mm") === selectedTime,
    );
    if (chosen) {
      console.log("Chosen screening:", chosen);
      setScreening(chosen);
    }
  };
  return {
    dates,
    selectedDate,
    setSelectedDate,
    times,
    selectedTime,
    setSelectedTime,
    handleContinue,
  };
}
