import React, {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { addCartItem } from '../../actions/cart-actions';

import './_styles.scss';

const Product = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState({});
  const [size, setSize] = useState({});
  
  useEffect(() => {
    setProduct({...location.state});
  }, [location.state]);
  
  const handleAddCart = () => {
    
    if (Object.keys(size).length === 0) {
      return;
    }
    
    dispatch(addCartItem({
      ...product,
      ...size
    }));
  };
  
  return (
    <>
      <div className="product">
        <div className="grid-x container">
          <div className="product__images">
            <figure className="product__figure">
              <img src={product.image || 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'} alt={product.name} />
            </figure>
          </div>
          <div className="product__content">
            <h3 className="product__name">
              {product.name}
            </h3>
            <div className="product__pricing">
              {product.on_sale ?
                <>
                  <span className="product__price--old">{product.regular_price}</span>
                  <span className="product__price">{product.actual_price}</span>
                  <span className="product__price product__price--installments">em até {product.installments}</span>
                </>
              :
                <>
                  <span className="product__price">{product.regular_price}</span>
                  <span className="product__price product__price--installments">em até {product.installments}</span>
                </>
              }
            </div>
            <div className="product__sizes">
              <p className="product__sizes__title">Escolha o tamanho:</p>
              <div className="product__sizes__buttons">
                {product.sizes && product.sizes.map((item, key) => {
                  
                  if (!item.available) {
                    return <></>;
                  }
  
                  return <button
                    key={key}
                    className={`product__sizes__button ${item.sku === size.sku ? 'product__sizes__button--is-selected' : ''}`}
                    onClick={() => {
                      setSize({
                        sku: item.sku,
                        size: item.size
                      });
                    }}
                  >
                    {item.size}
                  </button>
                })}
              </div>
            </div>
            <div className="product__actions">
              <button onClick={() => handleAddCart()} className="product__actions__button">
                Adicionar a sacola
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;