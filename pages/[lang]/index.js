import React from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home';
import '../base.scss';

@connect(
  () => ({}),
  () => ({}),
)
class HomePage extends React.Component {
  static async getInitialProps({ query }) {
    const language = query.lang || 'en';
    return {
      language,
    }
  }

  render() {
    return <Home {...this.props} />;
  }
}

export default HomePage;
