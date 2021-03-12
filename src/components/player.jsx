import React from 'react';
import { observer } from 'mobx-react';

const Player = ({ item }) => {
  return (
    <div className="player_box">
      <div className="player_video">
        <iframe
          title="video"
          id="player"
          type="text/html"
          allow="autoplay"
          allowFullScreen
          src={`https://www.youtube.com/embed/${item.id}`}
        />
      </div>
      <div className="video_info">
        <h1 className="title">{item.snippet.title}</h1>
        <div>
          <div className="meta_data">
            <span>
              조회수 {parseInt(item.statistics.viewCount).toLocaleString()}회
            </span>
            <span>{item.snippet.publishedAt.substr(0, 10)}</span>
          </div>
          <div className="like_disLike">
            <button>
              <i className="fas fa-thumbs-up"></i> {item.statistics.likeCount}
            </button>
            <button>
              <i className="fas fa-thumbs-down"></i>{' '}
              {item.statistics.dislikeCount}
            </button>
          </div>
        </div>
      </div>
      <div className="video_meta">
        <div className="meta_thumb">
          {item.snippet.channelTitle.substr(0, 1)}
        </div>
        <div className="meta">
          <span>{item.snippet.channelTitle}</span>
          <span>{item.snippet.description}</span>
        </div>
      </div>
    </div>
  );
};

export default observer(Player);
