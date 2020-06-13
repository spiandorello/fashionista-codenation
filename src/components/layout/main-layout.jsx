import React, { useRef } from 'react';

import { TopBar } from '../../containers';
import Sidebar from '../sidebar/sidebar';

import './_styles.scss';

const MainLayout = ({ routes }) => {
  return (
    <div className="app">
      <TopBar />
      {routes}
      <Sidebar />
    </div>
  );
};

export default MainLayout;