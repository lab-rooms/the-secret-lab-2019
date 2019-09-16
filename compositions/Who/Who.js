import React from 'react';
import Card from '../../components/Card';
import FloatingAsset from '../../components/FloatingAsset';
import './who.scss';

class Who extends React.Component {
  render() {
    return (
      <section className="who">
        <div className={'section__inner'}>
          <div className={'main__header'}>
            <h1 title="Who." className={'shadow shadow--float'}>
              <span>Who.</span>
            </h1>
          </div>
          <div className={'main__content'}>
            <div className="main__body">
              <div className={'grid--max-2'}>
                <div>
                  <Card>
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
                  </Card>
                  <Card>
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
                  </Card>
                  <Card>
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
                  </Card>
                </div>
                <div>
                  <FloatingAsset
                    image={'/static/images/contact.jpg'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Who
