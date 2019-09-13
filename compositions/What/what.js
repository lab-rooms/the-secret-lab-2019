import React from 'react';
import Link from 'next/link';
import Card from '../../components/Card';
import './what.scss';
import FloatingAsset from '../../components/FloatingAsset';

class What extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationTitle: '',
      animationContent: '',
      backgroundImage:'./static/images/contact.jpg',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animationTitle: 'make-small' })
    }, 1000);
    setTimeout(() => {
      this.setState({ animationContent: 'reveal' })
    }, 2000);
  }

  render() {
    return (
      <div className="what">
        <div className={`${this.state.animationTitle} main__header`}>
          <div style={{ 'max-width': '720px', 'text-align': 'center', position: 'relative' }}>
            <h1 title="What." className={'shadow shadow--float'}>
              <span>What.</span>
            </h1>
          </div>
        </div>
        <div className={`${this.state.animationContent} main__content`}>
          <div className="main__body">
            <FloatingAsset 
            backgroundImage={`${this.state.backgroundImage}`}
            />
            <div className="main__content-mask-floating-asset"/>
            <Card className="main__content-mask">
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
        </div>
      </div>
    )
  }
}

export default What
