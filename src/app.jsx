import './app.css';
import React, { useCallback, useEffect, useState } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import Player from './components/player';

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();

  const fetchData = useCallback(value => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(
      `https://youtube.googleapis.com/youtube/v3/${value}`,
      requestOptions
    ).then(response => response.json());
  }, []);

  useEffect(() => {
    fetchData(
      'videos?pageToken=CBkQAA&part=snippet,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4'
    )
      .then(json => json.items)
      .then(items => setItems([...items]))
      .catch(error => console.log('error', error));
  }, [fetchData]);

  const getItemsId = useCallback(
    keyword => {
      return fetchData(
        `search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4`
      )
        .then(json => json.items.map(item => item.id.videoId))
        .then(id => id.join());
    },
    [fetchData]
  );

  const searchItems = useCallback(
    keyword => {
      getItemsId(keyword)
        .then(id =>
          fetchData(
            `videos?part=snippet,statistics&id=${id}&maxResults=25&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4`
          )
        )
        .then(json => json.items)
        .then(items => setItems([...items]))
        .then(offPlayer)
        .catch(error => console.log('error', error));
    },
    [getItemsId, fetchData]
  );

  const getVideo = useCallback(item => {
    setItem({ ...item });
    onPlayer();
  }, []);

  const onPlayer = () => {
    const content = document.querySelector('.content');
    content.classList.add('on_player');
  };

  const offPlayer = () => {
    const content = document.querySelector('.content');
    content.classList.contains('on_player') &&
      content.classList.remove('on_player');
  };

  return (
    <>
      <Header searchItems={searchItems} />
      <div className="content">
        <Player item={item} />
        <ItemList items={items} getVideo={getVideo} />
      </div>
    </>
  );
};

export default App;
