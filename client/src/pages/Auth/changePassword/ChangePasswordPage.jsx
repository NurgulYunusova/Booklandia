import image from "../../../assets/images/changePassword.png";
import "./changePassword.scss";

function ChangePasswordPage() {
  return (
    <>
      <div className="changePassword">
        <div className="changePasswordContainer">
          <div className="form">
            <h3>CHANGE YOUR PASSWORD</h3>
            <p>Please enter a new password.</p>

            <form>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
              />{" "}
              <br />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password *"
              />
              <button type="submit">CHANGE YOUR PASSWORD</button>
            </form>
          </div>

          <div className="image">
            <img src={image} alt="Change Password Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordPage;
