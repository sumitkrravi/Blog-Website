import React from "react";
import './Signup.css'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the Yup validation schema
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, "Name must contain only letters and spaces")
    .required("Name is required"),
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

function Signup() {
  // Form validation
  const {
    register: signupField,
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
      <div className="signup-page">
        <div className="signup-section">
          <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            <h1>Signup</h1>
            <div className="form-group">
              <input
                type="text"
                {...signupField("name")}
                placeholder="Enter your name"
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                {...signupField("email")}
                placeholder="Enter your e-mail"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                {...signupField("password")}
                placeholder="Enter your password"
              />
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <button className="signup-btn">Signup</button>
            <p className="switch-login">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
