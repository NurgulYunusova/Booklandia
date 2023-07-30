import footerImg from "../../assets/images/footer_img.png";
import "./footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="top">
            <div className="leftSide">
              <div className="logo">
                <h1>Booklandia.</h1>
              </div>
              <p className="location">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <a
                href="https://www.google.com/maps?q=37.7749,-122.4194"
                target="_blank"
                rel="noopener noreferrer"
                className="map"
              >
                SHOW ON MAP
              </a>
              <div className="socialMedias">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rightSide">
              <div className="helpSection">
                <h3 className="headingText">Need Help</h3>
                <div className="number">
                  <a href="tel:+8418004635">+(84) - 1800 - 4635</a>
                </div>
                <div className="time">
                  <p>
                    Monday – Friday: 9:00-20:00 <br />
                    Saturday: 11:00 – 15:00
                  </p>
                </div>
                <div className="mail">
                  <a href="mailto:booklandia@gmail.com">booklandia@gmail.com</a>
                </div>
              </div>

              <div className="exploreSection">
                <h3 className="headingText">Explore</h3>
                <ul>
                  <li>About Us</li>
                  <li>Sitemap</li>
                  <li>Bookmarks</li>
                  <li>Sign In/Sign Up</li>
                </ul>
              </div>

              <div className="serviceSection">
                <h3 className="headingText">Our Service</h3>
                <ul>
                  <li>Help Center</li>
                  <li>Returns</li>
                  <li>Product Recalls</li>
                  <li>Accessibility</li>
                  <li>Contact Us</li>
                  <li>Store Pickup</li>
                </ul>
              </div>

              <div className="categoriesSection">
                <h3 className="headingText">Categories</h3>
                <ul>
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Drama</li>
                  <li>Horror</li>
                  <li>Kids</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bottom">
            <p>
              Copyright &copy; {new Date().getFullYear()}{" "}
              <a href="/">Booklandia.</a> All rights reserved.
            </p>
            <img src={footerImg} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
