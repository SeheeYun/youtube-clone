import './app.css';
import React, { useEffect, useState } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4',
      requestOptions
    )
      .then(response => response.json())
      .then(json => json.items)
      .then(items => setItems([...items]))
      .catch(error => console.log('error', error));
  }, []);

  const searchItems = keyword => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4`,
      requestOptions
    )
      .then(response => response.json())
      .then(json => json.items)
      .then(items =>
        setItems(
          items.map(item => {
            return { ...item, id: item.id['videoId'] };
          })
        )
      )
      .catch(error => console.log('error', error));
  };

  return (
    <>
      <Header searchItems={searchItems} />
      <ItemList items={items} />
    </>
  );
};

export default App;
