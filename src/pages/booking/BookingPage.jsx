import BookingDetails from "@/pages/booking/components/booking-details/BookingDetails.jsx";
import { useState } from "react";
import { BookingProvider } from "@/components/booking-context/BookingContext.jsx";
import "@/pages/booking/BookingPage.style.scss";
import SelectTime from "@/pages/booking/components/select-time/SelectTime.jsx";
import BreadcrumbsSection from "@/pages/booking/components/breadcrumbs-section/BreadcrumbsSection.jsx";
import SelectSeats from "@/pages/booking/components/select-seats/SelectSeats.jsx";

export default function BookingPage() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, 2));

  return (
    <div className="booking-page">
      <BookingProvider>
        <BookingDetails />
        <div className="booking-page__steps">
          <BreadcrumbsSection step={step} setStep={setStep} />
          {step === 0 && <SelectTime nextStep={next} />}
          {step === 1 && <SelectSeats nextStep={next} />}
          {step === 2 && <>paymentstep</>}
        </div>
      </BookingProvider>
    </div>
  );
}
