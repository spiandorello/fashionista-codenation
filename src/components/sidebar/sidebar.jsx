import React, { useState } from 'react';

import './_styles.scss';

const Sidebar = ({ icon, content, title, headerIcon, callback = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className={isOpen ? "sidebar__overlay" : ""} onClick={() => setIsOpen(false)} />
      <button className="sidebar__icon" onClick={() => setIsOpen(true)}>
        {icon}
      </button>
      <div className={`sidebar  ${isOpen ? "sidebar--is-visible" : ""}`}>
        <div className="sidebar__header">
          <div onClick={() => {
            setIsOpen(false);
            callback(isOpen);
  
          }}>
            {headerIcon}
          </div>
          <h2 className="sidebar__header__title">
            {title}
          </h2>
        </div>
        <div className="sidebar__content">
          {content}
        </div>
      </div>
    </>
  );
};

export default Sidebar;