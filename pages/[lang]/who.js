import React from 'react';
import { connect } from 'react-redux';
import Who from '../../compositions/Who';
import { DEFAULT_LANGUAGE } from '../../constants';

@connect(
  () => ({}),
  () => ({}),
)
class WhoPage extends React.Component {
  static async getInitialProps({ query }) {
    const language = query.lang || DEFAULT_LANGUAGE;
    return {
      language,
      to: {
        backgroundImage: 'linear-gradient(382deg, #002642 30%, #24345b 60%, transparent 60%, rgba(0, 0, 0, 0.2) 60%, transparent 60.5%)',
        backgroundColor: '#1c3557',
      },
      before: {
        backgroundImage: 'linear-gradient(348deg, #002642 30%, #284164 50%, transparent 50%, rgba(0, 0, 0, 0.2) 50%, transparent 50.5%)'
      },
      page: 'who',
    }
  }

  render() {
    return <Who {...this.props} />;
  }
}

export default WhoPage;
