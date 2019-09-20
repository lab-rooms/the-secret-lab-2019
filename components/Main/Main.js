import React from 'react';
import './main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="main--gradient" />
        <div className="main--light">
          <img src="/static/images/heavenly-light.jpg" />
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Main
