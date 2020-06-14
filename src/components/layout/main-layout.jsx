import React, {useEffect, useState} from 'react';
import {TopBar} from "../../containers";
import Routes from "../../routes";

import { request } from '../../modules/request';
import { endpoints } from '../../modules/endpoints';

const { getCatalog } = endpoints;

const MainLayout = () => {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    request(getCatalog.url)
      .then(response => {
        setProducts(response);
        setIsLoading(false);
      })
  }, []);
  
  if (isLoading) {
    return null;
  }
  
  return (
    <div className="main-layout">
      <TopBar products={products} />
      <Routes products={products} />
    </div>
  );
};

export default MainLayout;