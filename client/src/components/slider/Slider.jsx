import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import "./slider.scss";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";

function Slider() {
  const { books } = useContext(BookContext);
  const [sliderBooks, setSliderBooks] = useState([]);

  useEffect(() => {
    if (books) {
      setSliderBooks(books.slice(0, 5));
    }
  }, [books]);

  return (
    <>
      <div className="slider">
        <div className="sliderContainer">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {sliderBooks &&
              sliderBooks.map((q, key) => (
                <SwiperSlide key={key}>
                  <img src={`http://localhost:8080/${q.image}`} alt={q.name} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
