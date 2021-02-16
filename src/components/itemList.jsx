import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map(item => (
        <Item
          key={item['id']}
          id={item['id']}
          thumb={item['snippet']['thumbnails']['medium']}
          snippet={item['snippet']}
          viewCount={item['statistics']['viewCount']}
        />
      ))}
    </ul>
  );
};

export default ItemList;
