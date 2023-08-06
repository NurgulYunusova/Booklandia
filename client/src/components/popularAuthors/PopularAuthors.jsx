import "./popularAuthors.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PopularAuthors() {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/author")
      .then((res) => setAuthors(res.data.slice(0, 6)));
  }, []);

  const handleAuthorClick = (authorId) => {
    navigate(`/authorDetails/${authorId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="popularAuthors">
        <div className="popularAuthorsContainer">
          <div className="heading">
            <h1>Popular Authors</h1>
            <div className="divider"></div>
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
              {authors &&
                authors.map((q, key) => (
                  <SwiperSlide
                    key={key}
                    onClick={() => handleAuthorClick(q._id)}
                  >
                    <div className="author">
                      <img src={q.image} alt={q.name} />
                      <h3>{q.name}</h3>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularAuthors;
