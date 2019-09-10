import React from 'react';
import '@fortawesome/fontawesome-free/js/all';
import './social.scss';

export default ({ social }) => {
  return (
    <ul className={'social'}>
      {
        social.map(({icon, url}) => (
          <li><a href={url.value} target={'blank'}>
            <i className={`fab fa-${icon.value[0].name}`}/>
          </a></li>
        ))
      }
    </ul>
  )
}
