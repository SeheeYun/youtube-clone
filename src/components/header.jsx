import { React, useRef } from 'react';

const Header = ({ searchItems }) => {
  const inputRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    value && searchItems(value);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="/images/logo.png" alt="logo" />
        <span>YunTube</span>
      </a>
      <form className="search_form" onSubmit={onSubmit}>
        <input ref={inputRef} stype="text" placeholder="검색" />
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
