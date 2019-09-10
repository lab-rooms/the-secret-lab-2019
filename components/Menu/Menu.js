import React from 'react';
import Link from 'next/link';
import './menu.scss';

export default ({menu}) => {
  return (
      <ul className={'main-menu'}>
        {menu.menu_items.value.map(({title, url, system}) => (
          <li key={system.id}><Link href={url.value}><a>{title.value}</a></Link></li>
        ))}
      </ul>
  )
}
