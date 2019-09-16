import './home.scss';
import React from 'react';
import Link from 'next/link';

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className={'main__header'}>
          <img src="/static/images/logo-def-black-white.png" width="300" alt="" />
        </div>
      </section>
    )
  }
}

export default Home
