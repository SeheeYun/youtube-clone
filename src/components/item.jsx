import React, { useEffect } from 'react';

const Item = ({ id, thumb, snippet, diff, view, getVideo }) => {
  useEffect(() => {
    if (!view) {
      const metaData = document.querySelector('.meta_data');
      metaData.setAttribute('class', 'none_meta_data');
    }
  }, [view]);

  const itemClick = () => {
    getVideo(id);
  };

  return (
    <li className="item">
      <div className="item_box" onClick={itemClick}>
        <div className="thumb">
          <a href="#">
            <img src={thumb.url} alt="thumb" />
          </a>
        </div>
        <div className="meta">
          <a className="title" href="#">
            {snippet.title}
          </a>
          <div className="channel_title">{snippet.channelTitle}</div>
          <div className="meta_data">
            <span>조회수 {view}회</span>
            <span>{diff} 전</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
