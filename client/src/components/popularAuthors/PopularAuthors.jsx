import "./popularAuthors.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import author from "../../assets/images/author.jpg";

function PopularAuthors() {
  return (
    <>
      <div className="popularAuthors">
        <div className="popularAuthorsContainer">
          <div className="heading">
            <h1>Popular Authors</h1>
            <div className="divider"></div>
            <button>VIEW ALL</button>
          </div>

          <div className="authors">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              style={{
                "--swiper-pagination-color": "#003366",
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="author">
                  <img src={author} alt="" />
                  <h3>Suzanne Casey</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="author">
                  <img src={author} alt="" />
                  <h3>Suzanne Casey</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="author">
                  <img src={author} alt="" />
                  <h3>Suzanne Casey</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="author">
                  <img src={author} alt="" />
                  <h3>Suzanne Casey</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="author">
                  <img src={author} alt="" />
                  <h3>Suzanne Casey</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="author">
                  <img src={author} alt="" />
                  <h3>Suzanne Casey</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularAuthors;
