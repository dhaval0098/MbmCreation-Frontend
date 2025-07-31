import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Usernavbar } from "../User/Usernavbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submithandler = async (data) => {
    try {
      const res = await axios.post("/loginuu", data);

      if (res.status === 200) {
        toast.success("Login successful! 🚀", {
          position: "top-center",
        });

        localStorage.setItem("AdminEmail", res.data.data.email);
        localStorage.setItem("AdminID", res.data.data._id);

        setTimeout(() => {
          navigate("/");
        }, 1500); // delay so toast is visible
      } else {
        toast.error("Login failed. Please check credentials.", {
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.", {
        position: "top-center",
      });
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
      <ToastContainer />

      <div className="container" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit(submithandler)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <small className="text-danger">Email is required</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <small className="text-danger">Password is required</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
      <Usernavbar />
    </div>
  );
}
