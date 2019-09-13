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
    }
  }

  render() {
    return <Who {...this.props} />;
  }
}

export default WhoPage;
