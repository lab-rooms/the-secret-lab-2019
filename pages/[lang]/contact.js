import React from 'react';
import { connect } from 'react-redux';
import Contact from '../../components/Contact';
import '../../base-styles/base.scss';
import { DEFAULT_LANGUAGE } from '../../constants';

@connect(
  () => ({}),
  () => ({}),
)
class ContactPage extends React.Component {
  static async getInitialProps({ query }) {
    const language = query.lang || DEFAULT_LANGUAGE;
    return {
      language,
      page: 'why',
    }
  }

  render() {
    return <Contact {...this.props} />;
  }
}

export default ContactPage;
