import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';

@connect(
  state => ({
    footer: state.kentico.footer
  })
)
class FooterContainer extends React.Component {
  render() {
    return <Footer {...this.props} />
  }
}

export default FooterContainer;
