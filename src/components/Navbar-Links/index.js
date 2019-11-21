import React from "react";
import { Link } from "@reach/router";
import './index.css';

const NavBarLinks = () => {
  return (
    <div className="col-md-10 col-sm-10">
      <div className="navbar-collapse" id="myNav">
        <ul className="nav navbar-nav cus-nav">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="active">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/" className="active">
              Services
            </Link>
          </li>
          <li>
            <Link to="/" className="active">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarLinks;
