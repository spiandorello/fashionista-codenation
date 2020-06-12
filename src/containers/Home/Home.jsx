import React from 'react';

import { TopBar, Catalogs } from '../index';

const Home = ({ products }) => {
  return (
    <div>
      <TopBar />
      <Catalogs catalogs={products} />
    </div>
  );
};

export default Home;