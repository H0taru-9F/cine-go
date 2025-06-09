import "./HomePage.style.scss";
import HeroSection from "@/pages/home/components/hero-section/HeroSection.jsx";
import ScreeningsListingSection from "@/pages/home/components/screenings-listing-section/ScreeningsListingSection.jsx";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <ScreeningsListingSection startDate="2025-06-03" endDate="2025-06-30" label="This week" />
    </div>
  );
}

export default HomePage;
