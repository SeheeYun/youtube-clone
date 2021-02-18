import './app.css';
import React, { useCallback, useEffect, useState } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import Player from './components/player';

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  console.log(item);

  const fetchData = useCallback(value => {
    console.log('fatchData');
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
    console.log('useEffect');
    fetchData(
      'videos?part=snippet,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4'
    )
      .then(json => json.items)
      .then(items => setItems([...items]))
      .catch(error => console.log('error', error));
  }, [fetchData]);

  const searchItems = useCallback(
    keyword => {
      console.log('search');
      fetchData(
        `search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4`
      )
        .then(json => json.items)
        .then(items =>
          setItems(
            items.map(item => {
              return { ...item, id: item.id['videoId'] };
            })
          )
        )
        .catch(error => console.log('error', error));
    },
    [fetchData]
  );

  const getVideo = useCallback(
    id => {
      console.log('getvideo');
      fetchData(
        `videos?part=snippet,statistics&id=${id}&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4`
      )
        .then(json => json.items[0])
        .then(item =>
          setItem({
            ...item,
            snippet: {
              channelTitle: item.snippet.channelTitle,
              description: item.snippet.description,
              publishedAt: item.snippet.publishedAt,
              title: item.snippet.title,
            },
          })
        )
        .catch(error => console.log('error', error));
    },
    [fetchData]
  );

  return (
    <>
      <Header searchItems={searchItems} />
      <div className="content on_player">
        <Player />
        <ItemList items={items} getVideo={getVideo} />
      </div>
    </>
  );
};

export default App;
