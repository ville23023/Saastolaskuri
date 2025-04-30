import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CalculatorApp from "./pages/CalculatorApp";
import PrivateRoute from "./PrivateRoute";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected route for counter */}
          <Route element={<PrivateRoute />}>
            <Route path="/counter" element={<CalculatorApp />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
