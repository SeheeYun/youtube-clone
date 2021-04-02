import './app.css';
import React, { useCallback, useEffect, useRef } from 'react';
import ItemList from './components/itemList';
import Header from './components/header';
import Player from './components/player';
import { inject, observer } from 'mobx-react';

const App = ({ store }) => {
  const inputRef = useRef();
  const loadRef = useRef();

  const onSubmit = useCallback(e => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    const value = inputRef.current.value;
    value && store.addPage(value);
    onSearchBar();
  }, []);

  const onSearchBar = useCallback(() => {
    const searchBox = document.querySelector('.search_box');
    searchBox.classList.toggle('on_search_box');
  }, []);

  useEffect(() => {
    store.addPage();
    store.loaded(true);
  }, [store]);

  useEffect(() => {
    let io;
    if (loadRef.current) {
      io = new IntersectionObserver(onIo, { threshold: 0 });
      io.observe(loadRef.current);
    }
    return () => io && io.disconnect();
  }, [loadRef.current]);

  const onIo = ([entry]) => {
    if (entry.isIntersecting) {
      !inputRef.current.value
        ? store.addNextPage()
        : store.addNextPage(inputRef.current.value);
    }
  };

  return (
    <>
      <Header
        onSubmit={onSubmit}
        onSearchBar={onSearchBar}
        inputRef={inputRef}
      />
      <div className={`content ${store.item ? 'on_player' : ''}`}>
        {store.item && <Player item={store.item} />}
        {store.items && (
          <ItemList items={store.items} onItemClick={store.onItemClick} />
        )}
        {store.load && <div ref={loadRef} className="load"></div>}
      </div>
    </>
  );
};

export default inject('store')(observer(App));
