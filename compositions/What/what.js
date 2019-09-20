import React from 'react';
import CardWithImage from '../../components/CardWithImage';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Chevron from '../../components/Chevron';
import './what.scss';

class What extends React.Component {
  render() {
    return (
      <section className="what">
        <div className={'section__inner'}>
          <div className={'main__header'}>
            <img className={'portal'} src="/static/images/portal.gif" />
            <h1 title="What." className={'shadow shadow--float'}>
              <span>What.</span>
            </h1>
            <Chevron />
          </div>
        </div>

        <div className={'main__content'}>
          <div className="main__body">
            <div className={'section__inner section__inner--narrow'}>
              <div className={' content-box--v-2x'}>
                <Card className={'card--transparent'} align='center'>
                  <p className="pre-header">creative rustlers</p>
                  <h1>We collaborate with brands and agencies to create memorable experiences.</h1>
                  <p>Think of us as more of a creative partner than a resource. This means we have shared perspective on how we can work together to achieve your goals. Basically, your new BFF.</p>
                </Card>
              </div>
            </div>

            <div className={'section__inner'}>
              <div className={'content-box--v-2x'}>
                <CardWithImage image="/static/images/contact.jpg">
                  <p className="pre-header">small and crafty</p>
                  <h2>The Secret Lab is an award winning creative agency specialising in design.</h2>
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
                  <Button href="/who">Find out who we are</Button>
                </CardWithImage>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default What
