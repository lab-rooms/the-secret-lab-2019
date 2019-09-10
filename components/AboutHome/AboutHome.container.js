import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutHome from './AboutHome';

@connect(
  state => ({
    home_about: state.kentico.home_about,
  })
)
class AboutHomeContainer extends Component {
  render() {
    return this.props.home_about ? <AboutHome {...this.props} /> : null;
  }
}

export default AboutHomeContainer
