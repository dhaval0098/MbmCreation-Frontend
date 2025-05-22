import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Usernavbar } from "../User/Usernavbar";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;

    if (
      email === "dhavalpanchal50977@gmail.com" &&
      password === "dhaval12345"
    ) {
      // ✅ Save credentials to localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      alert("Login successfully");
      navigate("/"); // Navigate to landing page
    } else {
      alert("Login failed");
    }
  };

  return (
    <div
      className="bg-dark text-light"
      style={{
        fontFamily: "Roboto, sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
      <Usernavbar/>
    </div>
  );
}
