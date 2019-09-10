import React from 'react';
import { connect } from 'react-redux';
import Social from './Social';

@connect(
  state => ({
    social: state.kentico.social_links
  })
)
class SocialContainer extends React.Component {
  render() {
    return this.props.social ? <Social {...this.props} /> : null;
  }
}

export default SocialContainer;
