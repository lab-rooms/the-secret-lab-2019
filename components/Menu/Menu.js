import React, { useState } from 'react';
import './menu.scss';
import Navigation from './Navigation';

const Menu = () => {
  const [menuState, setMenuOpen] = useState('');

  const toggleMenu = () => {
    const menuOpened = menuState === 'menu--open' ? '' : 'menu--open';
    setMenuOpen(menuOpened);
  };

  return (
    <div className={`menu ${menuState}`}>
      <div className={'menu__burger'} onClick={toggleMenu}>
        <div className={'menu__cogs'}>
          <img className={'menu__cog'} src="/static/images/cogs/cog03.svg" />
          <img className={'menu__cog'} src="/static/images/cogs/cog01.svg" />
          <img className={'menu__cog'} src="/static/images/cogs/cog03.svg" />
        </div>
        <div className={'menu__burger-icon'}>
          <div>
            <span></span>
            <span></span>
          </div>
          <svg><path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path></svg>
          <svg><path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path></svg>
        </div>
      </div>
      <Navigation />
    </div>
  )
};

export default Menu;
