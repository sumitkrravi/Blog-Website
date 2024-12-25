import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import ForgetPassword from "../pages/ForgetPassword"
import './Login.css';

// Define the Yup validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must contain a valid domain (e.g., .com, .org)"
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character")
    .required("Password is required"),
});

function Login() {
  // Form validation
  const {
    register: loginField,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema), // Integrate yup with react-hook-form
  });

  const onSubmit = (data) => {
    console.log(data);
    // After submit, reset the form fields
    reset();
  };

  return (
    <>
      <div className="login-page">
        <div className="login-section">
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <h1 className="form-title">Login</h1>
            <div className="form-group">
              <input
                type="email"
                {...loginField("email")}
                placeholder="Enter your e-mail"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                {...loginField("password")}
                placeholder="Enter your password"
              />
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <button className="login-btn">Login</button>
            <Link to="/ForgetPassword" className="forgot-link">Forget Password</Link>
            <p className="switch-login">
              Don’t have an account? <Link to="/signup">Create Account</Link>
            </p>
          </form>
        </div>
      </div>

    </>
  );
}

export default Login;
