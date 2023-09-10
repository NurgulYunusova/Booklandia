/* eslint-disable react/no-unescaped-entities */
import "./aboutUs.scss";
import about from "../../assets/images/about.png";
import bookstoreImage from "../../assets/images/aboutBookstore.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";

function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Pages />
      <div className="aboutUs">
        <div className="aboutUsContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>ABOUT US</p>
            </div>
          </div>

          <div className="topImage">
            <img src={about} alt="Reward" />
          </div>

          <div className="heading">
            <h2>
              We are the premier book retailing chain in the Southeastern United
              States with more than 260 Book stores in 32 states.
            </h2>
          </div>

          <div className="bookstoreImage">
            <img src={bookstoreImage} alt="Book Store Image" />
          </div>

          <div className="ourStory">
            <h2>Our Story</h2>
            <p>
              At Booklandia, our journey began with a passion for books and a
              dream to create a haven for book lovers. Founded in 2003, we set
              out to curate a diverse collection of books that would cater to
              every reader's taste and interest. From the beginning, our mission
              has been to foster a love for reading and to build a community of
              book enthusiasts. We believe that books have the power to inspire,
              educate, and ignite the imagination. That's why we carefully
              handpick each book, ensuring that it finds its place on our
              shelves with thoughtfulness and care. Over the years, Booklandia
              has evolved into more than just a bookstore; it has become a
              cultural hub, a place where people come together to share their
              love for literature. We host book clubs, author events, and
              reading workshops to encourage the exchange of ideas and stories.
              As we continue on this journey, we remain committed to our core
              values: to provide exceptional service, offer a diverse selection
              of books, and foster a welcoming environment for all. We are
              grateful for the support of our community and look forward to many
              more chapters in our story. Thank you for being a part of our
              story. We invite you to explore the pages of Booklandia and embark
              on your own literary adventure with us.
            </p>
          </div>

          <div className="missionVision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                At Booklandia, our mission is to ignite a passion for reading
                and cultivate a vibrant community of book lovers. We aim to
                curate a diverse selection of books that cater to all interests
                and ages, fostering a love for literature and lifelong learning.
              </p>
            </div>

            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                Our vision is to be the ultimate destination for all book
                lovers, a place where literary exploration knows no bounds. We
                envision Booklandia as a haven that sparks curiosity, celebrates
                diversity, and nurtures a lifelong relationship with books.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUsPage;
