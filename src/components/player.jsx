import React from 'react';
import { observer } from 'mobx-react';

const Player = ({ item }) => {
  return (
    <div className="player-box">
      <div className="player-video-box">
        <div className="player-video">
          <iframe
            title="video"
            id="player"
            type="text/html"
            allowFullScreen
            allow="autoplay"
            src={`https://www.youtube.com/embed/${item.id}?autoplay=1`}
          />
        </div>
      </div>
      <div className="video-info-box">
        <div className="video-info">
          <h1 className="title">{item.snippet.title}</h1>
          <div>
            <div className="meta-data">
              <span>
                조회수 {parseInt(item.statistics.viewCount).toLocaleString()}회
              </span>
              <span>{item.snippet.publishedAt.substr(0, 10)}</span>
            </div>
            <div className="like-disLike">
              <button title="좋아요">
                <i className="fas fa-thumbs-up"></i> {item.statistics.likeCount}
              </button>
              <button title="싫어요">
                <i className="fas fa-thumbs-down"></i>{' '}
                {item.statistics.dislikeCount}
              </button>
            </div>
          </div>
        </div>
        <div className="video-meta">
          <div className="meta-thumb">
            {item.snippet.channelTitle.substr(0, 1)}
          </div>
          <div className="meta">
            <span>{item.snippet.channelTitle}</span>
            <span>{item.snippet.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Player);
