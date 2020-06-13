import React, {useEffect, useState} from 'react';

import { useLocation } from 'react-router-dom';

import './_styles.scss';

const Product = () => {
  let location = useLocation();
  
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    setProduct({...location.state});
  }, []);
  
  return (
    <div className="product">
      <div className="grid-x container">
        <div className="product__images">
          <figure className="product__figure">
            <img src={product.image} alt={product.name} />
          </figure>
        </div>
        <div className="product__content">
          <h3 className="product__name">
            {product.name}
          </h3>
          <div className="product__pricing">
            <span className="product__price">{product.regular_price}</span>
          </div>
          <div className="product__sizes">
            <p className="product__sizes__title">Escolha o tamanho:</p>
            <div className="product__sizes__buttons">
              <button className="product__sizes__button">P</button>
            </div>
          </div>
          <div className="product__actions">
            <button className="product__actions__button">
              Adicionar a sacola
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;