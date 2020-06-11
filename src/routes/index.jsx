import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomeRoute from './Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomeRoute} />
    </Switch>
  );
};

export default Routes;