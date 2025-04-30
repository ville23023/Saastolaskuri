import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">SavingsApp</Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          {!isLoggedIn && (
            <>
              <Link to="/login" className="hover:text-gray-300">
                Log in
              </Link>
              <Link to="/signup" className="hover:text-gray-300">
                Sign up
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/counter" className="hover:text-gray-300">
                Counter
              </Link>
              <button onClick={handleLogout} className="hover:text-gray-300">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300"
          >
            Home
          </Link>
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300"
              >
                Sign up
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link
                to="/counter"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300"
              >
                Counter
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="hover:text-gray-300 text-left"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
