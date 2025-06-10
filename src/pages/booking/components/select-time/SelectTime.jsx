import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import actGetScreeningsByFilmId from "@/store/screening/actions/byFilmId.js";
import Loader from "@/styles/loader/Loader.jsx";
import ErrorLayout from "@/layouts/error-layout/ErrorLayout.jsx";
import { useScreenings } from "@/pages/booking/hooks/useScreenings.js";
import { format, parseISO } from "date-fns";
import "@/pages/booking/components/select-time/SelectTime.style.scss";
import Button from "@/styles/button/Button.jsx";
import Typography from "@/styles/typography/Typography.jsx";
import Divider from "@mui/material/Divider";

export default function SelectTime({ nextStep }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.screeningByFilmId.data);
  const loading = useSelector((state) => state.screeningByFilmId.loading);
  const error = useSelector((state) => state.screeningByFilmId.error);

  const { id } = useParams();

  useEffect(() => {
    dispatch(actGetScreeningsByFilmId(id));
  }, [dispatch, id]);

  const {
    dates,
    selectedDate,
    setSelectedDate,
    times,
    setSelectedTime,
    selectedTime,
    handleContinue,
  } = useScreenings(data ?? []);

  if (loading) {
    return <Loader size="lg" fullScreen="full-screen" />;
  }

  if (error) {
    return <ErrorLayout errorMessage={error.message} />;
  }

  return (
    <div className="screenings-selector">
      <Typography className="screenings-selector__title" variant="h3">
        Date
      </Typography>
      <div className="screenings-selector__dates">
        {dates.map((date) => (
          <Button
            variant={date === selectedDate ? "secondary" : "primary"}
            key={date}
            className={`screenings-selector__dates__buton-group${date === selectedDate ? "--active" : ""}`}
            onClick={() => setSelectedDate(date)}
          >
            {format(parseISO(date), "dd MMM")}
          </Button>
        ))}
      </div>
      <Divider color="white" />
      <Typography className="screenings-selector__title" variant="h3">
        Time
      </Typography>
      <div className="screenings-selector__times">
        {times.map((time) => (
          <Button
            variant={time === selectedTime ? "secondary" : "primary"}
            key={time}
            className={time === selectedTime ? "active" : ""}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </Button>
        ))}
      </div>
      <Divider color="white" className="screenings-selector__divider" />
      <Button
        disabled={!selectedTime}
        onClick={() => {
          handleContinue();
          nextStep();
        }}
      >
        Next
      </Button>
    </div>
  );
}
