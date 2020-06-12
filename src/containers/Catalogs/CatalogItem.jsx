import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const CatalogItem = ({ catalog }) => {
  const { image, name, regular_price } = catalog;
  console.log(catalog)
  return (
    <div className="catalogs__item">
      <Link
        to="/"
        className="catalogs__item__link"
      >
        <figure className="catalogs__item__figure">
          <img src={image} alt={name} />
        </figure>
        <div className="catalogs__item__info">
          <div className="catalogs__item__info-title">
            {name}
          </div>
          <div className="catalogs__item__info-price">
            {regular_price}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CatalogItem;