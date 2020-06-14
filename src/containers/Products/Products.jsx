import React from 'react';

import { ProductItem } from '../index';

const Products = ({ products }) => (
    <div className="products">
      <div className="container">
        <div className="products__content">
          {products && products.map((item, key) =>
            <ProductItem key={key} product={item} />)
          }
        </div>
      </div>
    </div>
);

export default Products;