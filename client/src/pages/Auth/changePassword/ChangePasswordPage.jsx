import axios from "axios";
import image from "../../../assets/images/changePassword.png";
import "./changePassword.scss";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function ChangePasswordPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const changePasswordSchema = Yup.object({
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d).+/,
        "Password must start with an uppercase letter and contain at least one number"
      )
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: async ({ password }) => {
      const response = await axios.post(
        "http://localhost:8080/api/user/changePassword",
        {
          userId: user._id,
          password: password,
        }
      );

      if (response.status === 200) {
        alert(response.data);
        navigate("/login");
      } else {
        alert("Password and confirm password must be same");
      }
    },
  });

  return (
    <>
      <div className="changePassword">
        <div className="changePasswordContainer">
          <div className="form">
            <h3>CHANGE YOUR PASSWORD</h3>
            <p>Please enter a new password</p>

            <form onSubmit={handleSubmit}>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
              />
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                {errors?.password}
              </p>

              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={values.confirmPassword}
              />
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                {errors?.confirmPassword}
              </p>
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
