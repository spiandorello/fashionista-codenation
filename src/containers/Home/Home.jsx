import React from 'react';

import { TopBar, Products } from '../index';

const Home = ({ products }) => {
  return (
    <>
      <TopBar />
      <Products products={products} />
    </>
  );
};

export default Home;