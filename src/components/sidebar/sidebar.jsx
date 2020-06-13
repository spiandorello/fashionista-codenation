import React, { useState } from 'react';

import './_styles.scss';

const Sidebar = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`sidebar  ${isOpen ? "sidebar--is-visible" : ""}`}>
      <div className="sidebar__content">
        {content}
      </div>
    </div>
  );
};

export default Sidebar;