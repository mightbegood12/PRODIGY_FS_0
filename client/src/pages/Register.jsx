import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-green-200 to-green-300">
      <div className="p-3 max-w-lg mx-auto ">
        <h1 className="text-3xl text-center font-semibold my-7"> Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-green-400 text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
        <div className="flex justify-center gap-2 mt-5">
          <p>Already a Customer?</p>
          <Link to="/sign-in">
            <span className="text-blue-500">Sign-in</span>
          </Link>
        </div>
        <p className="text-red-700 mt-5">
          {error && "User Already Registered!"}
        </p>
      </div>
    </div>
  );
}
