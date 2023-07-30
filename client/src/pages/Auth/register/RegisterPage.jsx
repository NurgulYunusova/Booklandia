import "./register.scss";
import image from "../../../assets/images/login-image9.png";

function RegisterPage() {
  return (
    <>
      <div className="register">
        <div className="registerContainer">
          <div className="image">
            <img src={image} alt="Books" />
          </div>

          <div className="form">
            <h3>REGISTER FORM</h3>
            <p>Required fields are marked *</p>
            <form>
              <input type="text" placeholder="Name *" /> <br />
              <input type="email" id="email" placeholder="Email *" /> <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
              />{" "}
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Confirm password *"
              />
              <button type="submit">REGISTER</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
