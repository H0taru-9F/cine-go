import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.style.scss";
import Overlay from "@/styles/overlay/Overlay.jsx";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: "Inception",
      subtitle: "A mind-bending thriller by Christopher Nolan",
      image: "https://i.pinimg.com/736x/9d/15/ed/9d15edd5903656aa7a26fe3eba9844d0.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      subtitle: "Explore the boundaries of space and time",
      image:
        "https://images.angelstudios.com/image/upload/q_auto,f_webp,c_fill,g_faces/v1734647483/homestead-horiz-img-01b_1.webp",
    },
    {
      id: 3,
      title: "The Dark Knight",
      subtitle: "Gotham's silent guardian. The watchful protector",
      image: "https://i.pinimg.com/736x/de/1c/c7/de1cc7bc5b6d2c9c77cb3014e4283e47.jpg",
    },
  ];

  return (
    <section className="hero-slider-section">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item" style={{ backgroundImage: `url(${slide.image})` }}>
              <Overlay direction="to-bottom" />
              <div className="slide-text">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <button className="slide-button">See details</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
