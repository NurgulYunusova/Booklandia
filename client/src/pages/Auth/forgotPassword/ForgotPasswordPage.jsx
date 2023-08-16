import "./forgotPassword.scss";
import image from "../../../assets/images/forgot-password.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/forgotPassword",
        {
          email: email,
        }
      );
      console.log(response);
      if (response.status === 200) {
        alert(response.data);
        setEmail("");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
