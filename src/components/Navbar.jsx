// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import logo from "/images/logo.png"; // Update the path based on your project structure
import { IoIosDocument } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaShippingFast } from "react-icons/fa";
import { PiGpsFixBold } from "react-icons/pi";
import { VscDashboard } from "react-icons/vsc";


const Navbar = () => {
  return (
    <IconContext.Provider
      value={{ color: "black", size: "2rem", className: "global-class-name" }}
    >
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Amazon SMB" className="logo-image" />
            </Link>
          </div>
          <ul className="navbar-menu">
            <li>
              <span>Company</span>
            </li>
            <li>
              <span>Solutions</span>
            </li>
            <li>
              <span>Products</span>
            </li>
            <li className="navbar-dropdown">
              <span>Services</span>
              <ul className="dropdown-menu">
                <li>
                  <IoIosDocument />
                  <Link to="/services/document-generator">
                    Document Generator
                  </Link>
                </li>
                <li>
                  <FaShippingFast />
                  <Link to="/services/carrier-comparison">
                    Carrier Comparison
                  </Link>
                </li>
                <li>
                  <PiGpsFixBold />
                  <Link to="/services/shipment-tracker">Shipment Tracker</Link>
                </li>
                <li>
                  <VscDashboard />
                  <Link to="/services/dashboard">Dashboard</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="navbar-actions">
            <button className="btn login">Log In</button>
            <button className="btn signup">Sign Up</button>
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
