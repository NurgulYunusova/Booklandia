/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./testimonials.scss";

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonialsContainer">
          <div className="card">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              style={{
                "--swiper-pagination-color": "#003366",
              }}
            >
              <SwiperSlide>
                <div className="testimonial">
                  <p className="title">What people saying!</p>
                  <div className="divider"></div>
                  <p className="content">
                    "I am so happy to find a site where I can shop for unusual
                    items. The packaging was phenomenal and my book arrived on
                    time in perfect condition."
                  </p>
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <p className="details">JOEL M / NEW YORK</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial">
                  <p className="title">What people saying!</p>
                  <div className="divider"></div>
                  <p className="content">
                    "I am so happy to find a site where I can shop for unusual
                    items. The packaging was phenomenal and my book arrived on
                    time in perfect condition."
                  </p>
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <p className="details">JOEL M / NEW YORK</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial">
                  <p className="title">What people saying!</p>
                  <div className="divider"></div>
                  <p className="content">
                    "I am so happy to find a site where I can shop for unusual
                    items. The packaging was phenomenal and my book arrived on
                    time in perfect condition."
                  </p>
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <p className="details">JOEL M / NEW YORK</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial">
                  <p className="title">What people saying!</p>
                  <div className="divider"></div>
                  <p className="content">
                    "I am so happy to find a site where I can shop for unusual
                    items. The packaging was phenomenal and my book arrived on
                    time in perfect condition."
                  </p>
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <p className="details">JOEL M / NEW YORK</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial">
                  <p className="title">What people saying!</p>
                  <div className="divider"></div>
                  <p className="content">
                    "I am so happy to find a site where I can shop for unusual
                    items. The packaging was phenomenal and my book arrived on
                    time in perfect condition."
                  </p>
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <p className="details">JOEL M / NEW YORK</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial">
                  <p className="title">What people saying!</p>
                  <div className="divider"></div>
                  <p className="content">
                    "I am so happy to find a site where I can shop for unusual
                    items. The packaging was phenomenal and my book arrived on
                    time in perfect condition."
                  </p>
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <p className="details">JOEL M / NEW YORK</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial">
                  <p className="title">What people saying!</p>
                  <div className="divider"></div>
                  <p className="content">
                    "I am so happy to find a site where I can shop for unusual
                    items. The packaging was phenomenal and my book arrived on
                    time in perfect condition."
                  </p>
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <p className="details">JOEL M / NEW YORK</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
