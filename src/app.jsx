import './app.css';
import React, { useCallback, useEffect, useRef } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import Player from './components/player';
import { inject, observer } from 'mobx-react';

const App = ({ store }) => {
  const inputRef = useRef();
  const onSubmit = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    value && store.addPage(value);
  };

  useEffect(() => {
    store.addPage();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () =>
      window.removeEventListener('scroll', onScroll, { passive: true });
  }, []);

  const onScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight === scrollHeight) {
      !inputRef.current.value
        ? store.addNextPage()
        : store.addNextPage(inputRef.current.value);
    }
  }, []);

  return (
    <>
      <Header onSubmit={onSubmit} inputRef={inputRef} />
      <div className="content">
        {store.item && <Player item={store.item} />}
        {store.items && (
          <ItemList items={store.items} getVideo={store.getVideo} />
        )}
      </div>
    </>
  );
};

export default inject('store')(observer(App));
