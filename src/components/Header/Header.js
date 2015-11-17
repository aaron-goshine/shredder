import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="Header">
      <h1>temp header</h1>
        <div className="Header-container">
          <img className="Header-brandImg" src="/shredder.png" width="38"
            height="38" alt="shreder" />
            <span className="Header-brandTxt">Aaron Goshine</span>
          <div className="Header-banner">
            <h1 className="Header-bannerTitle">Shreder</h1>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;
