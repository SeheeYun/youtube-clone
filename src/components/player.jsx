import React from 'react';

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
          src={item && `https://www.youtube.com/embed/${item.id}`}
        />
      </div>
      <div className="video_info">
        <h1 className="title">{item && item.snippet.title}</h1>
        <div>
          <div className="meta_data">
            <span>
              조회수{' '}
              {item && parseInt(item.statistics.viewCount).toLocaleString()}회
            </span>
            <span>{item && item.snippet.publishedAt.substr(0, 10)}</span>
          </div>
          <div className="like_disLike">
            <button>
              <i class="fas fa-thumbs-up"></i>
              {item && item.statistics.likeCount}
            </button>
            <button>
              <i class="fas fa-thumbs-down"></i>
              {item && item.statistics.dislikeCount}
            </button>
          </div>
        </div>
      </div>
      <div className="video_meta">
        <div className="meta_thumb"></div>
        <div className="meta">
          <span>{item && item.snippet.channelTitle}</span>
          <span>{item && item.snippet.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;