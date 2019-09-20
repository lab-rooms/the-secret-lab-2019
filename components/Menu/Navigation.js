import React from 'react';
import Link from 'next/link';
import './menu.scss';

const Navigation = () => {
  return (
    <div className={'menu__navigation'}>
      <div className={'menu__navigation-content'}>
        <nav>
          <ul className={'list'}>
            <li><Link href="/"><a className={'active'}>Home</a></Link></li>
            <li><Link href="/what"><a>What</a></Link></li>
            <li><Link href="/who"><a>Who</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </div>
      <div className={'menu__navigation-fold'}/>
    </div>
  )
};

export default Navigation;
