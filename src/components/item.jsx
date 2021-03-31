import React, { useCallback } from 'react';
import { observer } from 'mobx-react';

const Item = ({ item, onItemClick }) => {
  const itemClick = () => {
    onItemClick(item);
  };

  const parseIntView = view => {
    if (view >= 10000) {
      return parseInt(view / 10000) + '만';
    } else return view;
  };

  const diffDate = useCallback(date => {
    const curDate = new Date().getTime();
    const itemDate = new Date(date).getTime();
    let diff = curDate - itemDate;
    diff = parseInt(diff / (1000 * 60 * 60));
    if (diff < 24) {
      return diff + '시간';
    } else if (diff >= 24 && diff < 168) {
      return parseInt(diff / 24) + '일';
    } else if (diff >= 168 && diff < 672) {
      return parseInt(diff / 168) + '주';
    } else if (diff >= 672 && diff < 8760) {
      return parseInt(diff / 672) + '개월';
    } else if (diff >= 8760) {
      return parseInt(diff / 8760) + '년';
    }
  }, []);

  return (
    <li className="item">
      <div className="item_box" onClick={itemClick}>
        <a href="#" className="thumb">
          <img src={item.snippet.thumbnails.medium.url} alt="thumb" />
        </a>
        <div className="meta">
          <a className="title" href="#">
            {item.snippet.title}
          </a>
          <div className="channel_title">{item.snippet.channelTitle}</div>
          <div className="meta_data item_meta_data">
            <span>조회수 {parseIntView(item.statistics.viewCount)}회</span>
            <span>{diffDate(item.snippet.publishedAt)} 전</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default observer(Item);
