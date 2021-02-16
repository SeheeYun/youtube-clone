import React from 'react';

const Item = ({ id, thumb, localized }) => {
  return (
    <>
      <div className="thumb">
        <a href="#">
          <img src={thumb.url} alt="no" />
        </a>
      </div>
      <div className="details">{localized.title}</div>
    </>
  );
};

export default Item;
