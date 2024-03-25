import React from "react";

import catLogo from "../../assets/CatviceLogobyDesigner.png";
import "./Header.styles.scss";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img className="header-logo" src={catLogo} alt="Logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-items">
              <a className="nav-link" href="/">
                Pics
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-link" href="/info">
                Info
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-link" href="new-pet">
                New Pet
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
