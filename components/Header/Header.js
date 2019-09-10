import React from 'react';
import './header.scss';
import Menu from '../Menu';
import Social from '../Social';

export default () => {
  return (
      <div className={'main-header'}>
        <p>Joe Lloyd</p>
        <Menu />
        <Social />
      </div>
  )
}
