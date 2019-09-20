import React from 'react';
import Card from '../../components/Card';
import Chevron from '../../components/Chevron';
import Link from 'next/link';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className={'main__header'}>
          <img className={'home-logo'} src="/static/images/logo-def-black-white.png" width="300" alt="" />
          <img className={'home-island'} src="/static/images/home.png" width="300" alt="" />
          <Chevron />
        </div>
        <div className={'main__content'}>
          <div className="main__body">
            <div className={'section__inner section__inner--narrow'}>
              <Card align="center">
                <p className="pre-header">fast and agile</p>
                <h2>The Secret Lab crafts solutions for the new digital world</h2>
                <p>With equality for people, nature, and creativity. That is our chemistry of joy.</p>
                <p><Link href="/what"><a className={'button'}>Find out what we do</a></Link></p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
