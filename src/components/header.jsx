import { React } from 'react';
import { observer } from 'mobx-react';

const Header = ({ onSubmit, inputRef, onSearchBar }) => {
  return (
    <header className="header">
      <a href="https://seheeyun.github.io/youtube-clone/" className="logo">
        <img src="./images/logo.png" alt="logo" />
        <span>YunTube</span>
      </a>
      <div className="search_box">
        <form className="search_form" onSubmit={onSubmit}>
          <button
            type="button"
            title="뒤로"
            className="back_btn"
            onClick={onSearchBar}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <input ref={inputRef} stype="text" placeholder="검색" />
          <button type="submit" title="검색" className="search_btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="top_bar">
        <button
          type="button"
          title="검색"
          className="search_btn"
          onClick={onSearchBar}
        >
          <i className="fas fa-search"></i>
        </button>
        <button title="로그인" className="avatar_btn">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
};

export default observer(Header);
