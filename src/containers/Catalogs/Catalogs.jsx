import React from 'react';

import { CatalogItem } from '../index';

const Catalogs = ({ catalogs }) => {
  return (
    <div className="catalogs">
      <div className="container">
        <div className="catalogs__content">
          {catalogs.map((item, key) =>
            <CatalogItem key={key} catalog={item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Catalogs;