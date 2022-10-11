import React from 'react';
import { collection as collectionType } from './../types/collection';

const Collection = (collection: collectionType) => {
  const { name, photos } = collection;
  return (
    <div className="collection">
      <img className="collection__big" src={photos[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={photos[1]} alt="Item" />
        <img className="collection__mini" src={photos[2]} alt="Item" />
        <img className="collection__mini" src={photos[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};

export default Collection;
