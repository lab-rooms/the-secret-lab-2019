import React from 'react';
import { connect } from 'react-redux';
import What from '../../components/What';
import '../../base-styles/base.scss';
import { DEFAULT_LANGUAGE } from '../../constants';

@connect(
  () => ({}),
  () => ({}),
)
class AboutPage extends React.Component {
  static async getInitialProps({ query }) {
    const language = query.lang || DEFAULT_LANGUAGE;
    return {
      language,
      page: 'about',
      to: {
        backgroundImage: 'linear-gradient(127deg, #0e0173 30%, #2f76b3 60%, transparent 60%, rgba(0, 0, 0, 0.2) 60%, transparent 60.5%)',
        backgroundColor: '#2758a3',
      },
      before: {
        backgroundImage: 'linear-gradient(240deg, #0e0173 30%, #2f76b3 50%, transparent 50%, rgba(0, 0, 0, 0.2) 50%, transparent 50.5%)'
      }
    }
  }

  render() {
    return <What {...this.props} />;
  }
}

export default AboutPage;
