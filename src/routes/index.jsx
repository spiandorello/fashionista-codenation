import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ProductsRoute from './Products';
import ProductRoute from './Product';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductsRoute} />
      <Route path="/product/:id" component={ProductRoute} />
    </Switch>
  );
};

export default Routes;