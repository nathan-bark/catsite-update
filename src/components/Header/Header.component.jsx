import React from 'react';

import catLogo from '../../assets/CatviceLogobyDesigner.png'
import './Header.styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <img className='header-logo' src={catLogo} alt="Logo" />
      <nav>
        <ul className='nav-list'>
          <li className='nav-items'><a className='nav-link' href="#">Pics</a></li>
          <li className='nav-items'><a className='nav-link' href="#">Info</a></li>
          <li className='nav-items'><a className='nav-link' href="#">New Pet</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
