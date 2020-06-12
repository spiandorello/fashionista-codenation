import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Promotion  = ({ value }) => {
  return (
    <div className="promotion">
      <span className="promotion__label">50% off</span>
    </div>
  );
};

const ProductItem = ({ product }) => {
  const { image, name, regular_price, id } = product;
  console.log(product)
  return (
    <div className="products__item">
      <Link
        to={`/product/${id}`}
        className="products__item__link"
      >
        <figure className="products__item__figure">
          <img src={image || 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'} alt={name} />
          <Promotion />
        </figure>
        <div className="products__item__info">
          <div className="products__item__info-title">
            {name}
          </div>
          <div className="products__item__info-price">
            <span className="old">{regular_price}</span>
            <span>{regular_price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;