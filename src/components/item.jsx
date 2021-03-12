import React from 'react';
import { observer } from 'mobx-react';

const Item = ({ item, diff, view, getVideo }) => {
  const itemClick = () => {
    getVideo(item);
  };

  return (
    <li className="item">
      <div className="item_box" onClick={itemClick}>
        <div className="thumb">
          <a href="#">
            <img src={item.snippet.thumbnails.medium.url} alt="thumb" />
          </a>
        </div>
        <div className="meta">
          <a className="title" href="#">
            {item.snippet.title}
          </a>
          <div className="channel_title">{item.snippet.channelTitle}</div>
          <div className="meta_data item_meta_data">
            <span>조회수 {view}회</span>
            <span>{diff} 전</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default observer(Item);
