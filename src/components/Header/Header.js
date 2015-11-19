
/**
 * Header componet
 * @TODO need further implementation to accommodate
 * dynamic content  via a @content attribute
 **/

import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render () {
    return (
      <header className="Header">
        <div className="Header-container">
          <img className="Header-brandImg"
            src="/shredder.png" alt="shredder" />
          <span className="Header-brandTxt">Shredder</span>
        </div>
      </header>
    );
  }

}

export default Header;
