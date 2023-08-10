/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useFormik } from "formik";
import image from "../../../assets/images/verify.png";
import { verifySchema } from "../validations";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./verify.scss";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

function VerifyPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { handlerLogInOut } = useContext(UserContext);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      confirmCode: "",
    },
    validationSchema: verifySchema,
    onSubmit: async ({ confirmCode }) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/user/confirm",
          {
            confirmCode,
            email: state,
          }
        );

        alert("You verified successfully");
        handlerLogInOut(true, navigate("/"), response.data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="verify">
        <div className="verifyContainer">
          <div className="image">
            <img src={image} alt="Books" />
          </div>

          <div className="form">
            <h3>OTP VERIFICATION</h3>
            <p className="info">
              We've sent a verification code to your email.{" "}
              <span style={{ fontWeight: 600 }}>
                If you don't see the verify code, check your spam folder.
              </span>
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="confirmCode"
                placeholder="Enter verification code"
                onChange={handleChange}
                value={values.confirmCode}
              />
              <p style={{ color: "red", fontSize: "12px", marginTop: "10px" }}>
                {errors?.confirmCode}
              </p>

              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyPage;
