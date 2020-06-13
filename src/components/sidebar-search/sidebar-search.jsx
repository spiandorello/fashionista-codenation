import React, { useEffect, useState } from 'react';

import _s from 'underscore.string';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'react-feather';

import Sidebar from '../sidebar/sidebar';

import './_styles.scss';

const ProductItem = ({ product }) => (
  <Link className="searchbar__list__item" to="/">
    <div className="searchbar__list__item__row">
      <figure className="searchbar__image">
        <img src={product.image} alt=""/>
      </figure>
      <div className="searchbar__list__info">
        <p className="searchbar__list__name">{product.name}</p>
        {/*<p className="searchbar__list__size">asdf</p>*/}
      </div>
      <div className="searchbar__list__pricing">
        <div className="searchbar__list__current">{product.regular_price}</div>
        {/*<div className="searchbar__list__installments">3x R$ 66,63</div>*/}
      </div>
    </div>
  </Link>
);

const SidebarSearch = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    setData(props.data.filter(item =>  item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1));
  }, [search]);
  
  return (
    <Sidebar
      icon={<Search size={22} />}
      content={
        <div className="searchbar">
          <div className="searchbar__header">
            <ArrowLeft className="searchbar__header__icon" />
            <h2 className="searchbar__header__title">Buscar produtos</h2>
          </div>
          <div className="searchbar__content">
            <input className="searchbar__input" type="text" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="searchbar__list">
            {!_s.isBlank(search) && data.map((item, key) => (
              <ProductItem key={key} product={item} />
            ))}
          </div>
        </div>
      }
    />
  );
};

export default SidebarSearch;