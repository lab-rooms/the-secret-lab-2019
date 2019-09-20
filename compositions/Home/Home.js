import React from 'react';
import CardWithImage from '../../components/CardWithImage';
import Chevron from '../../components/Chevron';
import Button from '../../components/Button';
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
            <div className={'section__inner'}>
              <CardWithImage image="https://assets-us-01.kc-usercontent.com:443/3b26baf0-067c-005f-87eb-d71a42470f96/d5f1e365-9b64-4b3b-b14b-23fa39592851/Toy%20Army.jpg?w=1905">
                <p className="pre-header">fast and agile</p>
                <h2>The Secret Lab crafts solutions for the new digital world</h2>
                <p>With equality for people, nature, and creativity. That is our chemistry of joy.</p>
                <div className={'grid--valign-center'}>
                  <div><Button href="/what">Find out what we do</Button></div>
                  <div><div className={'content-box--2x'}>or</div></div>
                  <div><Button href="https://calendly.com/femkestorm/call-with-femke" target="_blank">Request a secret call</Button></div>
                </div>
              </CardWithImage>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
