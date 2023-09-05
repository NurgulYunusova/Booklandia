import "./login.scss";
import image from "../../../assets/images/login-image.png";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validations";
import axios from "axios";
import { useFormik } from "formik";
import { UserContext } from "../../../context/UserContext";
import { useContext, useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

function LoginPage() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);
  const [loginFalseAlertOpen, setLoginFalseAlertOpen] = useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/user/login",
          {
            email,
            password,
          }
        );

        if (response.status === 203) {
          navigate("/verify", {
            state: email,
          });
        } else if (response.status == 200) {
          const token = response.data;
          localStorage.setItem("token", token);
          setIsLoggedIn(true);
          navigate("/");
        }
      } catch (error) {
        setLoginFalseAlertOpen(true);
      }
    },
  });

  const handleCloseFalseLoginAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLoginFalseAlertOpen(false);
  };

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

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                placeholder="Email *"
                onChange={handleChange}
                value={values.email}
              />
              <p style={{ color: "red", fontSize: "12px", marginTop: "10px" }}>
                {errors?.email}
              </p>

              <br />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
                onChange={handleChange}
                value={values.password}
              />
              <p style={{ color: "red", fontSize: "12px", marginTop: "10px" }}>
                {errors?.password}
              </p>

              <button type="submit">LOGIN</button>
            </form>

            <Snackbar
              open={loginFalseAlertOpen}
              autoHideDuration={3000}
              onClose={handleCloseFalseLoginAlert}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <MuiAlert
                onClose={handleCloseFalseLoginAlert}
                severity="error"
                sx={{ width: "100%" }}
              >
                Invalid email or password!
              </MuiAlert>
            </Snackbar>

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
