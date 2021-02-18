import React, { memo } from 'react';
import Item from './item';

const ItemList = memo(({ items, getVideo }) => {
  console.log(items);
  return (
    <ul className="item_list">
      {items.map(item => (
        <Item
          key={item['id']}
          id={item['id']}
          thumb={item['snippet']['thumbnails']['medium']}
          snippet={item['snippet']}
          viewCount={item['statistics'] && item['statistics']['viewCount']}
          getVideo={getVideo}
        />
      ))}
    </ul>
  );
});

export default ItemList;
