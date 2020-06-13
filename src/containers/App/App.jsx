import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '../../store';

import Routes from '../../routes';
import MainLayout from '../../components/layout/main-layout';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <MainLayout
          routes={<Routes />}
        />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
