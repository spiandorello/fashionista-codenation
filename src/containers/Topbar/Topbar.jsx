import React from 'react';
import { Link } from 'react-router-dom';

import { ShoppingBag, Search } from 'react-feather';

import './_styles.scss';

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="grid-x container">
        <div className="cell" />
        <Link to="/" className="cell topbar__center">
          <img className="topbar__center-logo" src="//cdn.shopify.com/s/files/1/2722/8634/t/43/assets/main-logo2.svg?v=4768978662345202764" alt="Lavish Alice" />
        </Link>
        <div className="cell topbar__icons">
          <button className="topbar__icons--search" onClick={() => {}}>
            <Search size={22} />
          </button>
          <button className="topbar__icons--cart" onClick={() => {}}>
            <ShoppingBag size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
