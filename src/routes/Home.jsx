import React, { useState, useEffect } from 'react';

import { Home } from '../containers';

import { request } from '../modules/request';
import { endpoints } from '../modules/endpoints';

const { getCatalog } = endpoints;

const HomeRoute = () => {
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
  
  return <Home products={products} />
};

export default HomeRoute;