import "./forgotPassword.scss";
import image from "../../../assets/images/forgot-password.png";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="forgotPassword">
        <div className="forgotPasswordContainer">
          <div className="form">
            <h3>FORGOT YOUR PASSWORD?</h3>
            <p>
              Please enter your email. You will receive an email message for
              reset your password.
            </p>
            <form>
              <input type="email" id="email" placeholder="Email" />
              <button type="submit">GET NEW PASSWORD</button>
            </form>
            <a onClick={() => navigate("/login")}>
              <i className="fa-solid fa-angle-left"></i> Back to Login
            </a>
          </div>

          <div className="image">
            <img src={image} alt="Forgot Password Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
