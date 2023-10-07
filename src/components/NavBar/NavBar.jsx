import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div className="navbar bg-dark border-bottom border-body ">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Forum</b>
          </Link>
        </li>
        <li>
          {user && (
            <Link to={`/profile/${user.userName}`}>
              <button type="button" className="btn btn-secondary">
                Profile
              </button>
            </Link>
          )}
        </li>
        <li>
          <Link to="/">
            <button type="button" className="btn btn-secondary">
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/Messages">
            <button type="button" className="btn btn-secondary">
              Messages
            </button>
          </Link>
        </li>
        <li>
          {user ? (
            <button
              onClick={logoutUser}
              type="button"
              className="btn btn-secondary"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="btn btn-secondary"
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
