import React from "react";
import { Outlet, Link } from "react-router-dom";

import catLogo from "../../assets/CatviceLogobyDesigner.png";

import "./Header.styles.scss";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img className="header-logo" src={catLogo} alt="Logo" />
        <nav>
          <ul className="nav-list">
            <Link className="nav-items" to="/">
              Pics
            </Link>
            <Link className="nav-items" to="/info">
              Info
            </Link>
            <Link className="nav-items" to="/new-pet">
              New Pet
            </Link>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
