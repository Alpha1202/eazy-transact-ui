import React from "react";
import NavBarLinks from "../Navbar-Links/index";
import "./index.css";


const Navbar = () => {
  return (
    <div className="menubar">
      <div className="menubar-content">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2">
                <div className="site-title">
                  <h3>EazyTransact</h3>
                </div>
              </div>
              <NavBarLinks />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
