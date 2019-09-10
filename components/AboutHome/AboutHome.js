import React from 'react';
import './home-about.scss';

export default ({ home_about }) => {
  return (
    <section  className={'home-about'}>
      <div>
        <img src={home_about.image_of_my_face.value[0].url} alt={home_about.image_of_my_face.name}/>
        <div className={'home-about__text'}>
          <h2>{home_about.title.value}</h2>
          <div dangerouslySetInnerHTML={{ __html: home_about.description.rawData.value }}/>
        </div>
      </div>
    </section>
  )
}
