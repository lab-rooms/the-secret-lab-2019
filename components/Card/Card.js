import React from 'react';
import './card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.className} card--text-${this.props.align}`}>
        <div className={'content-box--4x'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Card
