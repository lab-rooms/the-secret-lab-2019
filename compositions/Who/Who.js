import React from 'react';
import Button from '../../components/Button';
import CardWithImage from '../../components/CardWithImage';
import Card from '../../components/Card';
import Chevron from '../../components/Chevron';
import './who.scss';

class Who extends React.Component {
  render() {
    return (
      <section className="who">
        <div className={'main__header'}>
          <div className={'orbit'}>
            <div className={'ball'} />
            <div className={'ball'} />
            <img src="/static/images/ring.png" />
          </div>
          <div className={'orbit orbit--second'}>
            <div className={'ball'} />
            <div className={'ball'} />
            <img src="/static/images/ring.png" />
          </div>
          <h1 title="Who." className={'shadow shadow--float'}>
            <span>Who.</span>
          </h1>
          <Chevron />
        </div>
        <div className={'section__inner'}>
          <div className={'main__content'}>
            <div className="main__body">

              <div className={'content-box--v-2x'}>
                <Card align='center'>
                  <p className="pre-header">small and crafty</p>
                  <h2>The Secret Lab is an award winning creative agency specialising in design.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias quia
                    placeat facilis laborum
                    ipsum accusamus in fuga numquam, dignissimos quaerat pariatur fugiat nostrum vero
                    magni molestiae corporis
                repellendus labore.</p>
                </Card>
              </div>

              <div className={'content-box--v-2x'}>
                <Card align='center'>
                  <p className="pre-header">small and crafty</p>
                  <h2>The Secret Lab is an award winning creative agency specialising in design.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias quia
                    placeat facilis laborum
                    ipsum accusamus in fuga numquam, dignissimos quaerat pariatur fugiat nostrum vero
                    magni molestiae corporis
                repellendus labore.</p>
                </Card>
              </div>

              <div className={'content-box--v-2x'}>
                <Card align='right'>
                  <p className="pre-header">small and crafty</p>
                  <h2>The Secret Lab is an award winning creative agency specialising in design.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias quia
                    placeat facilis laborum
                    ipsum accusamus in fuga numquam, dignissimos quaerat pariatur fugiat nostrum vero
                    magni molestiae corporis
                repellendus labore.</p>
                </Card>
              </div>

              <div className={'content-box--v-2x'}>
                <CardWithImage image="/static/images/contact.jpg" >
                  <p className="pre-header">small and crafty</p>
                  <h2>The Secret Lab is an award winning creative agency specialising in design.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias quia
                    placeat facilis laborum
                    ipsum accusamus in fuga numquam, dignissimos quaerat pariatur fugiat nostrum vero
                    magni molestiae corporis
                repellendus labore.</p>
                  <Button href="/contact">Get in touch</Button>
                </CardWithImage>
              </div>

              <div className={'content-box--v-2x'}>
                <CardWithImage image="/static/images/contact.jpg" position="card-right">
                  <p className="pre-header">small and crafty</p>
                  <h2>The Secret Lab is an award winning creative agency specialising in design.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias quia
                    placeat facilis laborum
                    ipsum accusamus in fuga numquam, dignissimos quaerat pariatur fugiat nostrum vero
                    magni molestiae corporis
                repellendus labore.</p>
                </CardWithImage>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Who
