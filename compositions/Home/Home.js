import React from 'react';
import CardWithImage from '../../components/CardWithImage';
import Chevron from '../../components/Chevron';
import Card from '../../components/Card';
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
            <div className={'section__inner section__inner--narrow'}>
              <div className={' content-box--v-2x'}>
                <Card className={'card--transparent'} align='center'>
                  <p className="pre-header">fast and agile</p>
                  <h1>The Secret Lab crafts solutions for the new digital world</h1>
                  <p>With equality for people, nature, and creativity. That is our chemistry of joy.</p>
                </Card>
              </div>
            </div>

            <div className={'section__inner'}>
              <CardWithImage image="https://assets-us-01.kc-usercontent.com:443/3b26baf0-067c-005f-87eb-d71a42470f96/d5f1e365-9b64-4b3b-b14b-23fa39592851/Toy%20Army.jpg?w=1905">
                <p className="pre-header">fast and agile</p>
                <h2>The Secret Lab crafts solutions for the new digital world</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias quia
                    placeat facilis laborum
                    ipsum accusamus in fuga numquam, dignissimos quaerat pariatur fugiat nostrum vero
                    magni molestiae corporis
                repellendus labore.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem error
                  eveniet aspernatur
                  necessitatibus illo tempora incidunt vitae facilis dolor? Hic natus distinctio
                  ducimus nostrum quisquam ex,
                  officia vitae exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Exercitationem odit
                  obcaecati officiis temporibus itaque delectus necessitatibus consequuntur laboriosam
                  dolorum architecto, ex
                  ut
                molestiae maiores, fuga libero! Dolorum repellendus in sunt?</p>
                <div className={'grid--valign-center'}>
                  <div><Button href="/what">Find out what we do</Button></div>
                  <div><div className={'content-box--h-3x'}>or</div></div>
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
