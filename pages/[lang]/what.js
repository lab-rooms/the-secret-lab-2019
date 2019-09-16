import React from 'react';
import { connect } from 'react-redux';
import What from '../../compositions/What';
import { DEFAULT_LANGUAGE } from '../../constants';

@connect(
  () => ({}),
  () => ({}),
)
class WhatPage extends React.Component {
  static async getInitialProps({ query }) {
    const language = query.lang || DEFAULT_LANGUAGE;
    return {
      language,
      to: {
        backgroundImage: 'linear-gradient(317deg, #104F55 30%, #345d6e 60%, transparent 60%, rgba(0, 0, 0, 0.2) 60%, transparent 60.5%)',
        backgroundColor: '#2c5e6a',
      },
      before: {
        backgroundImage: 'linear-gradient(190deg, #104F55 30%, #386a77 50%, transparent 50%, rgba(0, 0, 0, 0.2) 50%, transparent 50.5%)'
      },
      page: 'what',
    }
  }

  render() {
    return <What {...this.props} />;
  }
}

export default WhatPage;
