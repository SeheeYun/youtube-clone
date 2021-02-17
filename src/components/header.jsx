import React from 'react';

const Header = props => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="/images/logo.png" alt="logo" />
        <span>YounTube</span>
      </a>
      <form className="search_form">
        <input type="text" type="text" placeholder="검색" />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="topbar">
        <button className="avatar_btn">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
