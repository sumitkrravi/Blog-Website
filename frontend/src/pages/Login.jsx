import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


// Define the Yup validation schema
const schema = yup.object().shape({
    email:yup.string()
    .email("Invalid email")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Email must contain a valid domain (e.g., .com, .org)")
    .required("Email is required"),
    password:yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character")
    .required("Password is required")
});

function Login() {

    // Form validation 

    const {
        register: loginField,
        handleSubmit,
        formState: {errors},
        reset
    }= useForm({
resolver: yupResolver(schema) // Integrate yup with react-hook-form
    });

  const onSubmit = (data) => {
    console.log(data);
// After submite the form the feild will empty
    reset();
  };



  return (
    <>
      <div className="login-section">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h1>Login</h1>
          <div className="form-group">
            <input
              type="email"
              {...loginField("email")}
              placeholder="Email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              {...loginField("password")}
              placeholder="Password"
              
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <button className="login-btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
