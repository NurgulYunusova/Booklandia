/* eslint-disable react/no-unescaped-entities */
import "./aboutUs.scss";
import about from "../../assets/images/about.png";
import bookstoreImage from "../../assets/images/aboutBookstore.jpg";
import { useNavigate } from "react-router-dom";

function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <>
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
    </>
  );
}

export default AboutUsPage;

{
  /* <h2>About Us</h2>
        <p>
          Welcome to Booklandia, your one-stop destination for all things books!
          We are a passionate team of book lovers dedicated to providing the
          best selection of books across various genres.
        </p>
        <p>
          At Booklandia, we believe in the power of books to inspire, educate,
          and entertain. Whether you are a lifelong reader or just starting your
          reading journey, we have something for everyone.
        </p>
        <p>
          Our bookstore offers a wide range of titles, from classic literature
          to contemporary bestsellers. We carefully curate our collection to
          ensure that every book lover can find their next favorite read.
        </p>
        <p>
          In addition to our extensive book selection, we also host book clubs,
          author events, and other literary gatherings. We believe in fostering
          a vibrant reading community and connecting readers with the authors
          they love.
        </p>
        <p>
          Thank you for choosing Booklandia as your go-to bookstore. We hope you
          enjoy exploring our shelves and discovering new worlds through the
          pages of our books.
        </p>
        <p>Happy reading!</p> */
}