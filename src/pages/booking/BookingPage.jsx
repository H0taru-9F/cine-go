import BookingDetails from "@/pages/booking/components/booking-details/BookingDetails.jsx";
import { useState } from "react";

export default function BookingPage() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="booking-page">
      <BookingDetails />
      <div className="booking-page__steps">
        {step === 0 && <>timestep</>}
        {step === 1 && <>seatstep</>}
        {step === 2 && <>paymentstep</>}
        <div>
          <button onClick={() => back()}>Back Step</button>

          <button onClick={() => next()}>Next Step</button>
        </div>
      </div>
    </div>
  );
}
