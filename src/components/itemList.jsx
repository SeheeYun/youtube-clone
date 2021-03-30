import React, { useCallback } from 'react';
import Item from './item';
import { observer } from 'mobx-react';

const ItemList = ({ items, onItemClick }) => {
  const parseIntView = useCallback(item => {
    const view = item.statistics.viewCount;
    if (view >= 10000) {
      return parseInt(view / 10000) + '만';
    }
  }, []);

  const diff = useCallback(item => {
    const curDate = new Date().getTime();
    const itemDate = new Date(item.snippet.publishedAt).getTime();
    let diff = curDate - itemDate;
    diff = parseInt((diff / (1000 * 60 * 60)) % 24);
    if (diff >= 24) {
      return '1일';
    }
    return diff + '시간';
  }, []);

  return (
    <ul className="item_list">
      {items.map(item => (
        <Item
          key={item.id + items.indexOf(item)}
          item={item}
          diff={diff(item)}
          view={item.statistics && parseIntView(item)}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
};

export default observer(ItemList);
