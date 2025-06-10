import Button from "@/styles/button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useBooking } from "@/components/booking-context/BookingContext.jsx";
import { useEffect } from "react";
import actGetSeatsByScreeningId from "@/store/screening/actions/seatsById.js";
import Loader from "@/styles/loader/Loader.jsx";
import ErrorLayout from "@/layouts/error-layout/ErrorLayout.jsx";

import "@/pages/booking/components/select-seats/SelectSeats.style.scss";

export default function SelectSeats({ nextStep }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.seatsByScreeningId);
  const { screening, seats: selectedSeats, setSeats: setSelectedSeats } = useBooking();

  console.log(data);

  useEffect(() => {
    if (screening?.id) {
      dispatch(actGetSeatsByScreeningId(screening.id));
    }
  }, [dispatch, screening, setSelectedSeats]);

  const rows =
    data?.reduce((acc, seat) => {
      if (!acc[seat.rowsNumber]) acc[seat.rowsNumber] = [];
      acc[seat.rowsNumber].push(seat);
      return acc;
    }, {}) || {};

  const toggleSeat = (seat) => {
    if (seat.status !== "AVAILABLE") return; // недоступні — не клікабельні
    const isSelected = selectedSeats.some((s) => s.id === seat.id);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  if (loading) {
    return <Loader size="lg" fullScreen="full-screen" />;
  }

  if (error) {
    return <ErrorLayout errorMessage={error.message} />;
  }

  return (
    <div className="select-seats">
      {Object.entries(rows).map(([rowNumber, seatsInRow]) => (
        <div key={rowNumber} className="select-seats__row">
          <span className="select-seats__row-label">Ряд {rowNumber}</span>
          <div className="select-seats__row-seats">
            {seatsInRow.map((seat) => {
              const isSelected = selectedSeats.some((s) => s.id === seat.id);
              const disabled = seat.status !== "AVAILABLE";
              const classNames = [
                "select-seats__seat-btn",
                disabled && "select-seats__seat-btn--unavailable",
                !disabled && isSelected && "select-seats__seat-btn--selected",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <button
                  key={seat.id}
                  className={classNames}
                  disabled={disabled}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat.seatInRow}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <Button
        width="full"
        disabled={true}
        onClick={() => {
          nextStep();
        }}
      >
        Next
      </Button>
    </div>
  );
}
