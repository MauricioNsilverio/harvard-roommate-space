import React from 'react';

import harvard from '../assets/images/harvard.png';

function Header() {
  return (
    <header>
      <nav>
        <div>
        <img src={harvard} alt="logo"/>
        <span>Harvard University Roommate Space</span>
        </div>
        
        <div>
          <span>Mauricio's Roommate Essay</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
