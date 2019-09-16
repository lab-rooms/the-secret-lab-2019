import React from 'react';
import Link from 'next/link';
import './menu.scss';

const Navigation = () => {
  return (
    <div className={'menu__navigation'}>
      <div className={'menu__navigation-content'}>
        <nav>
          <ul className={'list'}>
            <li className={'active'}><Link href="/"><a className={'button'}>Home</a></Link></li>
            <li><Link href="/what"><a className={'button'}>what</a></Link></li>
            <li><Link href="/who"><a className={'button'}>who</a></Link></li>
            <li><Link href="/contact"><a className={'button'}>contact</a></Link></li>
          </ul>
        </nav>
      </div>
      <div className={'menu__navigation-fold'}/>
    </div>
  )
};

export default Navigation;
