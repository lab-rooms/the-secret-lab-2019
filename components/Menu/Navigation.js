import React from 'react';
import './menu.scss';

const Navigation = () => {
  return (
    <div className={'menu__navigation'}>
      <div className={'menu__navigation-content'}>
        <nav>
          <ul className={'list'}>
            <li className={'active'}>home</li>
            <li>what</li>
            <li>who</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
      <div className={'menu__navigation-fold'}/>
    </div>
  )
};

export default Navigation;
