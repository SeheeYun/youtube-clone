import './app.css';
import React, { useCallback, useEffect, useState } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import Player from './components/player';
import { inject, observer } from 'mobx-react';

const App = props => {
  console.log(props.store.data.name);

  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();

  const fetchDataa = useCallback(params => {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    const requestOptions = { method: 'GET', redirect: 'follow' };
    return fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4&' +
        query,
      requestOptions
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));
  }, []);

  const fetchData = useCallback((value, pageToken) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(
      `https://youtube.googleapis.com/youtube/v3/${value}${
        pageToken ? `&pageToken=CBkQAA` : ''
      }`,
      requestOptions
    ).then(response => response.json());
  }, []);

  useEffect(() => {
    getPopularItems().then(data => setData({ ...data }));
  }, []);

  const getPopularItems = useCallback(() => {
    const params = {
      chart: 'mostPopular',
      regionCode: 'KR',
      part: 'snippet,statistics',
      maxResults: 25,
    };
    return fetchDataa(params);
  }, []);

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

  const getSearchItems = useCallback(
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

  const onScroll = useCallback(() => {
    console.log('scroll');
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight === scrollHeight) {
      const pageToken = data.nextPageToken;
      getPopularItems(pageToken)
        .then(json => json.items)
        .then(items => setData({ items: data.items.concat(items) }));
    }
  }, [getPopularItems]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () =>
      window.removeEventListener('scroll', onScroll, { passive: true });
  }, []);

  return (
    <>
      <Header getSearchItems={getSearchItems} />
      <div className="content">
        {item && <Player item={item} />}
        {data.items && <ItemList items={data.items} getVideo={getVideo} />}
      </div>
    </>
  );
};

export default inject('store')(observer(App));
