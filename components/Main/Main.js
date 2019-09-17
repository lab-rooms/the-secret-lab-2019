import React from 'react';
import './main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="main--gradient" />
        {this.props.children}
      </div>
    )
  }
}

export default Main
