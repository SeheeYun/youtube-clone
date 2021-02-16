import './app.css';
import React, { useEffect, useState } from 'react';
import ItemList from './components/itemList';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4',
      requestOptions
    )
      .then(response => response.json())
      .then(json => json.items)
      .then(items => setItems([...items]))
      .catch(error => console.log('error', error));
  }, []);

  return <ItemList items={items} />;
};

export default App;
