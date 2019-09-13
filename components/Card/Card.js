import React from 'react';
import './card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    )
  }
}

export default Card
