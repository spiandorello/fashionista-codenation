import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomeRoute from './Home';
import ProductRoute from './Product';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route path="/product/:id" component={ProductRoute} />
    </Switch>
  );
};

export default Routes;