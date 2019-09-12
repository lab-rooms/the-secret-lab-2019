import React, { useState } from 'react';
import './menu.scss';
import Navigation from './Navigation';

const Menu = () => {
  const [menuState, setMenuOpen] = useState('rest');

  const toggleMenu = () => {
    if (menuState === 'rest') {
      setMenuOpen('open')
    } else if (menuState === 'open') {
      setMenuOpen('close');
      setTimeout(() => {
        setMenuOpen('rest');
      }, 1000)
    }
  };

  return (
    <div className={menuState}>
      <div className={'burger-menu'} onClick={() => toggleMenu()}>presss muh!!</div>
      <Navigation />
    </div>
  )
};

export default Menu;
