import './app.css';
import React, { useCallback, useEffect, useRef } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import Player from './components/player';
import { inject, observer } from 'mobx-react';

const App = ({ store }) => {
  const inputRef = useRef();
  const sentinelRef = useRef();

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const value = inputRef.current.value;
      value && store.addPage(value);
      onSearchBar();
    },
    [store]
  );

  const onSearchBar = useCallback(() => {
    const searchBox = document.querySelector('.search-box');
    searchBox.classList.toggle('on-search-box');
  }, []);

  useEffect(() => {
    store.addPage();
    store.loaded(true);
  }, [store]);

  useEffect(() => {
    let io;
    if (sentinelRef.current) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            !inputRef.current.value
              ? store.addNextPage()
              : store.addNextPage(inputRef.current.value);
          }
        },
        { threshold: 0 }
      );
      io.observe(sentinelRef.current);
    }
    return () => io && io.disconnect();
  }, [sentinelRef.current]);

  return (
    <>
      <Header
        onSubmit={onSubmit}
        onSearchBar={onSearchBar}
        inputRef={inputRef}
      />
      <div className={`content ${store.item ? 'on-player' : ''}`}>
        {store.item && <Player item={store.item} />}
        {store.items && (
          <ItemList items={store.items} onItemClick={store.onItemClick} />
        )}
        {store.isload && <div ref={sentinelRef} className="sentinel"></div>}
      </div>
    </>
  );
};

export default inject('store')(observer(App));
