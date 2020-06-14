import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import SidebarSearch from "../../components/sidebar-search/sidebar-search";
import SidebarCart from "../../components/sidebar-cart/sidebar-cart";

import './_styles.scss';

const TopBar = ({ products }) => {
  return (
    <header className="topbar">
      <div className="grid-x container">
        <div className="cell" />
        <Link to="/" className="cell topbar__center">
          <img className="topbar__center-logo" src={Logo} alt="Fashionista" />
        </Link>
        <div className="cell topbar__icons">
          <SidebarSearch data={products} />
          <SidebarCart />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
