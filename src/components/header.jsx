import { React } from 'react';
import { observer } from 'mobx-react';

const Header = ({ onSubmit, inputRef, onSearchBar }) => {
  return (
    <header className="header">
      <a href="https://seheeyun.github.io/youtube-clone/" className="logo">
        <svg viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0,50) scale(0.1,-0.1)" fill="#ff0000">
            <path
              d="M60 411 c-40 -11 -54 -54 -54 -161 0 -115 13 -150 63 -163 19 -5 113
-7 208 -5 141 2 175 6 188 19 26 26 40 138 27 216 -6 36 -18 74 -27 82 -13 13
-47 16 -198 18 -100 1 -193 -2 -207 -6z m208 -111 c39 -23 72 -46 72 -50 0 -6
-81 -58 -152 -97 -5 -2 -8 41 -8 97 0 56 3 99 8 97 4 -2 40 -23 80 -47z"
            />
          </g>
        </svg>
        <span>YunTube</span>
      </a>
      <div className="search-box">
        <form className="search-form" onSubmit={onSubmit}>
          <button
            type="button"
            title="뒤로"
            className="back-btn"
            onClick={onSearchBar}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <input ref={inputRef} stype="text" placeholder="검색" />
          <button type="submit" title="검색" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="top-bar">
        <button
          type="button"
          title="검색"
          className="search-btn"
          onClick={onSearchBar}
        >
          <i className="fas fa-search"></i>
        </button>
        <button title="로그인" className="avatar-btn">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
};

export default observer(Header);
