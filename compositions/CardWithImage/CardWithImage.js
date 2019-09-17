import React from 'react';
import Card from '../../components/Card';
import FloatingAsset from '../../components/FloatingAsset';
import './card-with-image.scss';

class CardWithImage extends React.Component {
  render() {
    return (
      <div className={`card-with-image grid--valign-center grid--max-2 grid--stretch-h-2x ${this.props.className} card-with-image--${this.props.position}`}>
        <div>
          <div className={'content-box--2x'}>
            <Card>
              {this.props.children}
            </Card>
          </div>
        </div>
        <div>
          <div className={'content-box--2x'}>
            <FloatingAsset
              image={this.props.image}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CardWithImage
