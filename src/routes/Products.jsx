import React, { useState, useEffect } from 'react';

import { Products } from '../containers';

import { request } from '../modules/request';
import { endpoints } from '../modules/endpoints';

const { getCatalog } = endpoints;

const ProductsRoute = () => {
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
  
  return <Products products={products} />
};

export default ProductsRoute;