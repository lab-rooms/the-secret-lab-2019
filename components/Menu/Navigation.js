import React from 'react';
import './menu.scss';

const Navigation = ({menuPosition}) => {
  return (
    <div className={'main-navigation'}>
      <nav>
        <ul>
          <li>home</li>
          <li>what</li>
          <li>who</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  )
};

export default Navigation;
