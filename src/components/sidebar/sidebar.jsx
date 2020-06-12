import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ArrowLeft } from 'react-feather';

import './_styles.scss';

const Sidebar = ({ icon, title, content, footer}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className={`sidebar__icon ${isOpen ? 'sidebar__icon--hide' : ''}`} onClick={() => setIsOpen(true)}>
        {icon}
      </div>
      <div className="sidebar">
        <div className={`sidebar__overlay ${isOpen ? 'sidebar__overlay--visible' : ''}`} onClick={() => setIsOpen(false)}/>
        <div className={`sidebar__container ${isOpen ? 'sidebar__container--visible' : ''}`}>
          <header className="sidebar__header">
            <ArrowLeft onClick={() => setIsOpen(false)} />
            <h2 className="sidebar__header-title">{title}</h2>
          </header>
          {content && <div className="sidebar__content">{content}</div>}
          {footer && <div className="sidebar__footer">{footer}</div>}
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  content: PropTypes.object,
  footer: PropTypes.object,
};



export default Sidebar