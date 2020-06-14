import React, { useState } from 'react';

import './_styles.scss';

const Sidebar = ({ icon, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className={isOpen ? "sidebar__overlay" : ""} onClick={() => setIsOpen(false)} />
      <button onClick={() => setIsOpen(true)}>
        {icon}
      </button>
      <div className={`sidebar  ${isOpen ? "sidebar--is-visible" : ""}`}>
        <div className="sidebar__content">
          {content}
        </div>
      </div>
    </>
  );
};

export default Sidebar;