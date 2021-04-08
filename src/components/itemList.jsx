import React from 'react';
import Item from './item';
import { observer } from 'mobx-react';

const ItemList = ({ items, onItemClick }) => {
  return (
    <ul className="item-list">
      {items.map(item => (
        <Item
          key={item.id + items.indexOf(item)}
          item={item}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
};

export default observer(ItemList);
