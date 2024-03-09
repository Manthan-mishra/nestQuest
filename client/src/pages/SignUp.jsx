import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log("value ", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    await axios
      .post("/api/auth/signup", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setLoading(false);
        setError("");
        console.log("data ", res.data);
        navigate("/sign-in");
      })
      .catch((err) => {
        if (err.response.data.success === false) {
          setError(err.response.data.message);
          setLoading(false);
        } else {
          setError(err.message);
          setLoading(false);
        }
      });
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg focus:outline-none"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default SignUp;
