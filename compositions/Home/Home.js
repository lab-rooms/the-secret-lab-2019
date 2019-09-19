import './home.scss';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className={'main__header'}>
          <img className={'home-logo'} src="/static/images/logo-def-black-white.png" width="300" alt="" />
          <img className={'home-island'} src="/static/images/home.png" width="300" alt="" />
        </div>
      </section>
    )
  }
}

export default Home
