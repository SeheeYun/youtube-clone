import './app.css';
import React, { useCallback, useEffect } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import Player from './components/player';
import { inject, observer } from 'mobx-react';

const App = ({ store }) => {
  useEffect(() => {
    store.getPopularItems();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () =>
      window.removeEventListener('scroll', onScroll, { passive: true });
  }, []);

  const onScroll = useCallback(() => {
    console.log('scroll');
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight === scrollHeight) {
    }
  }, []);

  return (
    <>
      <Header getSearchItems={store.getSearchItems} />
      <div className="content">
        {store.item && <Player item={store.item} />}
        {store.data.items && (
          <ItemList items={store.data.items} getVideo={store.getVideo} />
        )}
      </div>
    </>
  );
};

export default inject('store')(observer(App));
