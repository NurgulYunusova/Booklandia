import "./login.scss";
import loginBackgroundImage from "../../../assets/images/login-image.png";

function LoginPage() {
  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <div className="image">
            <img src={loginBackgroundImage} alt="" />
          </div>

          <div className="form">
            <h3>LOGIN FORM</h3>
            <p>Required fields are marked *</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
