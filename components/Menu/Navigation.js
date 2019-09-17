import React from 'react';
import Link from 'next/link';
import './menu.scss';

const Navigation = () => {
  return (
    <div className={'menu__navigation'}>
      <div className={'menu__navigation-content'}>
        <nav>
          <ul className={'list'}>
            <li><Link href="/"><a className={'button active'}>Home</a></Link></li>
            <li><Link href="/what"><a className={'button'}>What</a></Link></li>
            <li><Link href="/who"><a className={'button'}>Who</a></Link></li>
            <li><Link href="/contact"><a className={'button'}>Contact</a></Link></li>
          </ul>
        </nav>
      </div>
      <div className={'menu__navigation-fold'}/>
    </div>
  )
};

export default Navigation;
