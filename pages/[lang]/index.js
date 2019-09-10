import React from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home';
import { getContentItemFrom, getContentFrom } from '../../redux/kentico/actions';
import { getItem, getItems } from '../../controllers';
import '../base.scss';

@connect(
  () => ({}),
  dispatch => ({
    getMenu: (lang) => dispatch(getContentItemFrom('menu', 'main_menu', lang)),
    getAbout: (lang) => dispatch(getContentItemFrom('home_about', 'home_about', lang)),
    getSocial: (lang) => dispatch(getContentFrom('social_links', lang))
  })
)
class HomePage extends React.Component {
  static async getInitialProps({ store, query }) {
    const language = query.lang || 'en';
    const menu = await getItem('menu', 'main_menu', language);
    const about = await getItem('home_about', 'home_about', language);
    const social = await getItems('social_links', language);

    store.dispatch({
      type: 'FETCH_ITEM',
      payload: menu.item,
      document: 'menu',
    });

    store.dispatch({
      type: 'FETCH_ITEM',
      payload: about.item,
      document: 'home_about',
    });

    store.dispatch({
      type: 'FETCH_ITEM',
      payload: social.item,
      document: 'social_links',
    });

    return {
      menu: menu.item,
      about: about.item,
      social: social.items,
      language,
    }
  }

  componentDidMount() {
    const { language } = this.props;
    this.getData(language)
  }

  getData(language) {
    this.props.getMenu(language);
    this.props.getAbout(language);
    this.props.getSocial(language);
  }

  render() {
    return <Home {...this.props} />;
  }
}

export default HomePage;
