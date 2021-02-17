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

  return (
    <>
      <Header />
      <ItemList items={items} />
    </>
  );
};

export default App;
