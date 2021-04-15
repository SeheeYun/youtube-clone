import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import useObserverLazyLoad from '../hooks/useObserverLazyLoad';
import styled from 'styled-components';

const Item = ({ item, onItemClick }) => {
  const { isloaded, itemRef } = useObserverLazyLoad();

  const itemClick = () => {
    onItemClick(item);
    window.scrollTo({ top: 0 });
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
      {isloaded ? (
        <div className="item-box" onClick={itemClick}>
          <ThumbContainer>
            <Thumb bg={item.snippet.thumbnails.medium.url}>
              <div></div>
            </Thumb>
          </ThumbContainer>
          <div className="meta">
            <h4 className="title">{item.snippet.title}</h4>
            <div className="channel-title">{item.snippet.channelTitle}</div>
            <div className="meta-data item-meta-data">
              <span>조회수 {parseIntView(item.statistics.viewCount)}회</span>
              <span>{diffDate(item.snippet.publishedAt)} 전</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="item-box">
          <ThumbContainer>
            <Thumb>
              <div></div>
            </Thumb>
          </ThumbContainer>
          <div className="meta">
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      )}
    </li>
  );
};

const ThumbContainer = styled.div`
  width: 100%;
`;

const Thumb = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props =>
      props.bg ? `url(${props.bg})` : 'var(--search-form-border-color)'};
    background-size: contain;
    transition: ease 0.2s;
  }
`;

const Skeleton = styled.div`
  background-color: var(--search-form-border-color);
  width: 100%;
  height: 20px;
  margin-top: 12px;
  margin-bottom: 4px;
  & + & {
    width: 80%;
  }
`;

export default observer(Item);
