import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import "./slider.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function Slider() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/book")
      .then((res) => setBooks(res.data.slice(0, 5)));
  }, []);

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
            {books &&
              books.map((q, key) => (
                <SwiperSlide key={key}>
                  <img src={q.image} alt={q.name} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
