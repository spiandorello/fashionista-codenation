import React from 'react';
import _ from 'underscore';
import { useSelector, useDispatch } from 'react-redux';
import { Plus, Minus } from 'react-feather'

import { ArrowLeft, ShoppingBag } from 'react-feather';

import Sidebar from '../sidebar/sidebar';

import {addCartItem, removeAllCartItem, removeCartItem} from "../../actions/cart-actions";

import './_styles.scss';

const getTotalPrice = (products) => {
  
  if (_.isEmpty(products)) {
    return 0;
  }
  
  if (products.length === 1) {
    return (products[0].currentPrice * products[0].qtd).toFixed(2);
  }
  
  return products.reduce((acm, item) => (item.currentPrice * item.qtd) + (acm.currentPrice * acm.qtd)).toFixed(2);
};

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddCart = () => {
    dispatch(addCartItem({
      ...product,
      available: true,
      size: product.size,
      sku: product.sku
    }));
  }
  
  const handleRemoveCart = () => {
    dispatch(removeCartItem({
      ...product,
      available: true,
      size: product.size,
      sku: product.sku
    }));
  }
  
  const handleRemoveAllCart = () => {
    dispatch(removeAllCartItem({
      ...product,
      available: true,
      size: product.size,
      sku: product.sku
    }));
  }
  
  return (
    <div className="cart__list__item">
      <div className="cart__list__item__row">
        <figure className="cart__image">
          <img src={product.image} alt=""/>
        </figure>
        <button type="button" className="cart__remove" onClick={handleRemoveAllCart}>Remover item</button>
        <div className="cart__list__info">
          <p className="cart__list__name">{product.name}</p>
          <p className="cart__list__size"><span>Tam.: {product.size}</span></p>
          <div className="cart__list__quantity">
            <button type="button" className="cart__icons" onClick={handleRemoveCart}><Minus size={16}/></button>
            <div className="cart__list__input">{product.qtd}</div>
            <button type="button" className="cart__icons" onClick={handleAddCart}><Plus size={16}/></button>
          </div>
        </div>
        <div className="cart__list__pricing">
          <div className="cart__list__current">{product.regular_price}</div>
          {product.installments && <div className="cart__list__installments">{product.installments}</div>}
        </div>
      </div>
    </div>
  );
};

const SidebarCart = () => {
  const { cart } = useSelector(state => state);
  
  return (
    <Sidebar
      icon={<ShoppingBag size={22} />}
      content={
        <div className="cart">
          <div className="cart__header">
            <ArrowLeft className="cart__header__icon" />
            <h2 className="cart__header__title">Meu carrinho</h2>
          </div>
          <div className="cart__list">
            {Object.values(cart.products).map((item, key) => (
              <ProductItem key={key} product={item}/>
            ))}
          </div>
          <div className="cart__footer">
            {getTotalPrice(Object.values(cart.products))}
          </div>
        </div>
      }
    />
  );
};

export default SidebarCart;