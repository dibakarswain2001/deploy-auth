import React, { useContext, useState } from "react";
import "../styles/ForgotPassword.css";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

const ForgotPassword = () => {
  const { isAuthenticated, API } = useContext(Context);
  const [email, setEmail] = useState("");

  const navigateTo = useNavigate()
;
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${API}/api/v1/user/password/forgot`,
        { email },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="forgot-password-page">
        <div className="forgot-password-container">
          <h2>Forgot Password</h2>
          <p>Enter your email address to receive a password reset token.</p>
          <form
            onSubmit={handleForgotPassword}
            className="forgot-password-form"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="forgot-input"
            />
            <button type="submit" className="forgot-btn">
              Send Reset Link
            </button>
            <br /><br />
           
          </form>
          <button style={{background: 'none',
    border: 'none',
    padding: 0,
    color: "#854ce6"}} onClick={() =>navigateTo(-1)}>Login</button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
