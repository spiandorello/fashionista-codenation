import React from 'react';
import { useSelector } from 'react-redux';

import _s from 'underscore.string';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'react-feather';

import Sidebar from '../sidebar/sidebar';

import './_styles.scss';

const ProductItem = ({ product }) => (
  <Link
    className="cartbar__list__item"
    to={{
      pathname: `/product/${_s.slugify(product.name)}`,
      state: {...product}
    }}
  >
    <div className="cartbar__list__item__row">
      <figure className="cartbar__image">
        <img src={product.image} alt=""/>
      </figure>
      <div className="cartbar__list__info">
        <p className="cartbar__list__name">{product.name}</p>
      </div>
      <div className="cartbar__list__pricing">
        <div className="cartbar__list__current">{product.regular_price}</div>
        <div className="cartbar__list__installments">3x R$ 66,63</div>
      </div>
    </div>
  </Link>
);

const SidebarCart = () => {
  const { cart } = useSelector(state => state);
  return (
    <Sidebar
      icon={<ShoppingBag size={22} />}
      content={
        <div className="cartbar">
          <div className="cartbar__header">
            <ArrowLeft className="cartbar__header__icon" />
            <h2 className="cartbar__header__title">Meu carrinho</h2>
          </div>
          <div className="cartbar__list">
            {/*{Object.values(cart.products).map((item, key) => (*/}
            {/*  <ProductItem key={key} product={item}/>*/}
            {/*))}}*/}
            <ProductItem product={cart.products["4029_259_0_38"]}/>
            <ProductItem product={cart.products["4029_259_0_38"]}/>
            <ProductItem product={cart.products["4029_259_0_38"]}/>
            <ProductItem product={cart.products["4029_259_0_38"]}/>
            <ProductItem product={cart.products["4029_259_0_38"]}/>
          </div>
          <div className="cartbar__footer">
            adslfdsak
          </div>
        </div>
      }
    />
  );
};

export default SidebarCart;