import { useNavigate } from "react-router-dom";
import "./contactUs.scss";
import Footer from "../../components/footer/Footer";
import Pages from "../../components/pages/Pages";
import Header from "../../components/header/Header";

function ContactUsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Pages />
      <div className="contactUs">
        <div className="contactUsContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>CONTACT US</p>
            </div>
          </div>

          <div className="bottom">
            <div className="leftSide">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.686237921497!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1625000111807!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>

            <div className="rightSide">
              <h3>We Would Love To Hear From You</h3>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form>
                <input type="text" id="name" placeholder="Name *" required />{" "}
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  required
                />{" "}
                <br />
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Message"
                ></textarea>{" "}
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUsPage;
