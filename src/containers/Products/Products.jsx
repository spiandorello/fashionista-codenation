import React from 'react';

import {ProductItem, TopBar} from '../index';

const Products = ({ products }) => {
  return (
    <>
      <TopBar products={products} />
      <div className="products">
        <div className="container">
          <div className="products__content">
            {products.map((item, key) =>
              <ProductItem key={key} product={item} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;