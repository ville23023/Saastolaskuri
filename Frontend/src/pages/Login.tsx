import React, { useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: username, password }),
      });

      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson ? await response.json() : {};

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/counter");
      } else {
        setErrorMessage(data.error || "Invalid username or password");
        setShowModal(true);
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again.");
      setShowModal(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
        role="form"
        aria-labelledby="login-title"
      >
        <h1 id="login-title" className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>

        <p className="p-4 text-sm text-center" style={{ lineHeight: "1.6" }}>
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Sign up here
          </Link>
        </p>
      </form>
      {/*Modal includes ARIA attributes for screen reader users.*/}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          aria-live="assertive"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className="bg-white p-6 rounded-md shadow-lg w-80 text-center"
            role="document"
            tabIndex={-1}
          >
            <h3
              id="modalTitle"
              className="text-lg font-semibold text-red-600 mb-4"
            >
              Login Failed
            </h3>
            {/*Errors are handled dynamically.*/}
            <p id="modalDescription" className="text-gray-700">
              {errorMessage || "An unknown error occurred. Please try again."}{" "}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              aria-label="Close Modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
