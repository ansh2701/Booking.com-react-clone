import React from "react";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCableCar,
  faCalendarDay,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="headerWrapper">
      <div className="innerWidth navbar">
        <div className="navbarContainer">
          <div className="logo">
            <Link to="/">Booking</Link></div>
          <div className="navItems">
            <button className="btn">Register</button>
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
      <div className="innerWidth header">
        <div className="headerContainer">
          <div className="headerItems">
            <div className="headerItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rentals</span>
            </div>
            <div className="headerItem">
              <FontAwesomeIcon icon={faCableCar} />
              <span>Attractions</span>
            </div>
            <div className="headerItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
