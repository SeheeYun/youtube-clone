import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map(item => (
        <Item
          key={item['id']}
          id={item['id']}
          thumb={item['snippet']['thumbnails']['medium']}
          localized={item['snippet']['localized']}
        />
      ))}
    </div>
  );
};

export default ItemList;
