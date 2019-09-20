import React from 'react';
import App from 'next/app';
import { PageTransition } from 'next-page-transitions';
import { TweenMax, Back } from 'gsap';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import Store from '../redux/store';
import Particles from '../utils/particles';
import Main from '../components/Main';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

import '../base-styles/style.scss';

@withRedux((initialState) => Store.getOrCreateStore(initialState), {
  debug: false,
})
class MyApp extends App {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.from = props.pageProps.to;
    this.before = props.pageProps.before;
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, router }
  }

  initializeParticleEngine(canvas) {
    if (this.isCanvasActive) return;
    new Particles(canvas);
    this.isCanvasActive = true;
  }

  animateBackground() {
    const { pageProps } = this.props;
    TweenMax.fromTo('.main--gradient',
      1,
      this.before,
      { ...pageProps.before, ease: Back.easeInOut.config(1) });
    TweenMax.fromTo('.main', 1.4, this.from, { ...pageProps.to, ease: Back.easeInOut.config(1) });

    this.from = pageProps.to;
    this.before = pageProps.before;
  }

  render() {
    const {
      Component, pageProps, store, router,
    } = this.props;

    return (
      <Provider store={store}>
        <Meta />
        <Main ref={() => this.animateBackground()} className={`main main--intro ${pageProps.page}--background`}>
          <canvas ref={canvas => this.initializeParticleEngine(canvas)} />
        </Main>
        <Menu />
        <Logo />
        <PageTransition timeout={1000} classNames={'main__page page-transition'}>
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <Footer />
      </Provider>
    )
  }
}

export default MyApp;
