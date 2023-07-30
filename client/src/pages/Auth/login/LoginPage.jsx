import "./login.scss";
import image from "../../../assets/images/login-image.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <div className="image">
            <img src={image} alt="Books" />
          </div>

          <div className="form">
            <h3>LOGIN FORM</h3>
            <p className="information">Required fields are marked *</p>

            <form>
              <input type="email" id="email" placeholder="Email *" /> <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
              />
              <button type="submit">LOGIN</button>
            </form>

            <p className="forgotPasswordLink">
              <a onClick={() => navigate("/forgotPassword")}>
                Forgot password?
              </a>
            </p>

            <p className="registerLink">
              Need an account?{" "}
              <a onClick={() => navigate("/register")}>Register here!</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
