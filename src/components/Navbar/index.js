import React from "react";
import { css, keyframes } from "@emotion/core";
import NavBarLinks from "../Navbar-Links/index";
import "./index.css";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

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

              <span
                css={css`
                  font-size: 60px;
                  display: inline-block;
                  animation: 2s ${spin} linear infinite;
                  &:hover {
                    animation: 1s ${spin} linear infinite reverse;
                    text-decoration: underline;
                  }
                `}
                role="img"
                aria-label="logo"
              >
                💰
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
