import React from 'react';

const Player = props => {
  return (
    <div className="player_box">
      <div className="player_video">
        <iframe
          title="video"
          id="player"
          type="text/html"
          allow="autoplay"
          allowFullScreen
          src="https://www.youtube.com/embed/M7lc1UVf-VE?&mute=1"
        />
      </div>
      <div className="video_info">
        <h1 className="title">qwertt qwewqe r</h1>
        <div className="meta_data">
          <span>조회수 13241회</span>
          <span>2021-1-12</span>
        </div>
      </div>
      <div className="video_meta">
        <div className="meta_thumb"></div>
        <div className="meta">
          <span>윤튜브</span>
          <span>구독자 100만명</span>
          <span>
            한때 한국의 제나마블스를 꿈꿨었던 최승현의취미생활 햄튜브입니다.
            이곳은 퍼포밍 일러스트레이터 햄튜브의 임시 전시장입니다! 최고의
            웃음개박살꾼 햄튜브 구독하시고 재미있는 영상을 받아보세요!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Player;
