import React from 'react';

import { TopBar } from '../index';

import './_styles.scss';

const Product = () => {
  return (
    <>
      <TopBar />
      <div className="product">
        <div className="grid-x container">
          <div className="product__preview">
            <figure>
              {/*<img src="" alt="" />*/}
            </figure>
            adf
          </div>
          <div className="product__info">
            dfsg
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;