import React from 'react';
import { connect } from 'react-redux';
import Why from '../components/Why';
import './base.scss';

@connect(
  () => ({}),
  () => ({}),
)
class WhyPage extends React.Component {
  static async getInitialProps({ query }) {
    const language = query.lang || 'en';
    return {
      language,
      page: 'why',
    }
  }

  render() {
    return <Why {...this.props} />;
  }
}

export default WhyPage;
