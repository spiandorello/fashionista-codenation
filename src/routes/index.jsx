import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ProductsRoute from './Products';
import ProductRoute from './Product';

const Routes = ({products}) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <ProductsRoute products={products} />} />
      <Route path="/product/:name" component={ProductRoute} />
    </Switch>
  );
};

export default Routes;