import React from 'react';
import CardWithImage from '../../compositions/CardWithImage';
import Chevron from '../../components/Chevron';
import './what.scss';

class What extends React.Component {
  render() {
    return (
      <section className="what">
        <div className={'section__inner'}>
          <div className={'main__header'}>
            <h1 title="What." className={'shadow shadow--float'}>
              <span>What.</span>
            </h1>
            <Chevron />
          </div>
          <div className={'main__content'}>
            <div className="main__body">
              <CardWithImage image="/static/images/contact.jpg" >
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
              </CardWithImage>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default What
