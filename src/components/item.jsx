import React, { useEffect, useState } from 'react';

const Item = ({ id, thumb, snippet, viewCount, getVideo }) => {
  const [view, setView] = useState(viewCount);
  const [diff, setDiff] = useState();

  useEffect(() => {
    if (!viewCount) {
      const metaData = document.querySelector('.meta_data');
      metaData.setAttribute('class', 'none_meta_data');
    } else {
      if (view >= 10000) {
        setView(view => {
          return parseInt(view / 10000) + '만';
        });
      }

      setDiff(() => {
        const curDate = new Date().getTime();
        const itemDate = new Date(snippet.publishedAt).getTime();
        let diff = curDate - itemDate;
        diff = parseInt((diff / (1000 * 60 * 60)) % 24);
        if (diff >= 24) {
          return '1일';
        }
        return diff + '시간';
      });
    }
  }, []);

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
