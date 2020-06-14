import React from 'react';
import { Link } from 'react-router-dom';
import _s from 'underscore.string';

import './styles.scss';

const Promotion  = ({ discount }) => {
  
  if (!discount) {
    return null;
  }
  
  return (
    <div className="promotion">
      <span className="promotion__label">{discount} off</span>
    </div>
  );
};

const ProductItem = ({ product }) => {
  const { image, name, regular_price, discount_percentage, actual_price, on_sale } = product;
  
  return (
    <div className="products__item">
      <Link
        to={{
          pathname: `/product/${_s.slugify(name)}`,
          state: { ...product }
        }}
        className="products__item__link"
      >
        <figure className="products__item__figure">
          <img src={image || 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'} alt={name} />
          <Promotion discount={discount_percentage} />
        </figure>
        <div className="products__item__info">
          <div className="products__item__info-title">
            {name}
          </div>
          <div className="products__item__info-price">
            {on_sale ?
             <>
               <span className="old">{regular_price}</span>
               <span>{actual_price}</span>
             </>
            :
              <span>{actual_price}</span>
            }
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;