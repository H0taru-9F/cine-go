import { Breadcrumbs } from "@mui/material";
import Typography from "@/styles/typography/Typography.jsx";
import { Link, useParams } from "react-router-dom";
import "@/pages/booking/components/breadcrumbs-section/BreadcrumbsSection.style.scss";

export default function BreadcrumbsSection({ step, setStep }) {
  const { id } = useParams();

  return (
    <Breadcrumbs color="white" aria-label="breadcrumb">
      <Link to={`/`}>
        <Typography variant="q">Home</Typography>
      </Link>
      <Link to={`/film/${id}`}>
        <Typography variant="q">Film details</Typography>
      </Link>
      {step >= 0 && (
        <Typography className="breadcrumb-item" onClick={() => setStep(0)} variant="q">
          Time
        </Typography>
      )}
      {step >= 1 && (
        <Typography className="breadcrumb-item" onClick={() => setStep(1)} variant="q">
          Seats
        </Typography>
      )}
      {step === 2 && (
        <Typography className="breadcrumb-item" variant="q">
          Payment
        </Typography>
      )}
    </Breadcrumbs>
  );
}
