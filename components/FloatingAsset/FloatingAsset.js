import React from 'react';
import './floating-asset.scss';

class FloatingAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <div className="content-box--6x">
        <div className="floating-asset"
             style={{ backgroundImage: `url(${this.props.backgroundImage || './static/images/02.png'})`}}
        />
      </div>
      </>
    )
  }
}

export default FloatingAsset
