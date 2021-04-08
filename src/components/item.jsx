import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import useObserverLazyLoad from '../hooks/useObserverLazyLoad';

const Item = ({ item, onItemClick }) => {
  const { isloaded, itemRef } = useObserverLazyLoad();

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
    <li className="item" ref={itemRef}>
      {isloaded && (
        <div className="item-box" onClick={itemClick}>
          <a href="#" className="thumb">
            <img src={item.snippet.thumbnails.medium.url} alt="thumb" />
          </a>
          <div className="meta">
            <a className="title" href="#">
              {item.snippet.title}
            </a>
            <div className="channel-title">{item.snippet.channelTitle}</div>
            <div className="meta-data item-meta-data">
              <span>조회수 {parseIntView(item.statistics.viewCount)}회</span>
              <span>{diffDate(item.snippet.publishedAt)} 전</span>
            </div>
          </div>
        </div>
      )}
      {!isloaded && (
        <div className="item-box">
          <div className="skeleton-thumb">
            <div></div>
          </div>
          <div className="meta">
            <div className="skeleton-title"></div>
            <div className="skeleton-title"></div>
          </div>
        </div>
      )}
    </li>
  );
};

export default observer(Item);
