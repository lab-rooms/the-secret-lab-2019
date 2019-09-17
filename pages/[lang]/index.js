import React from 'react';
import { connect } from 'react-redux';
import Home from '../../compositions/Home';
import { DEFAULT_LANGUAGE } from '../../constants';

@connect(
  () => ({}),
  () => ({}),
)
class HomePage extends React.Component {
  static async getInitialProps({ query }) {
    const language = query.lang || DEFAULT_LANGUAGE;
    return {
      language,
      to: {
        backgroundImage: 'linear-gradient(227deg,#6a0136 30%,#8e0f4f 60%,transparent 60%,rgba(0, 0, 0, 0.2) 60%,transparent 60.5%)',
        backgroundColor: '#86104b',
      },
      before: {
        backgroundImage: 'linear-gradient(340deg, #6a0136 30%, #921c58 50%, transparent 50%, rgba(0, 0, 0, 0.2) 50%, transparent 50.5%)',
      },
      page: 'home',
    }
  }

  render() {
    return <Home {...this.props} />;
  }
}

export default HomePage;
