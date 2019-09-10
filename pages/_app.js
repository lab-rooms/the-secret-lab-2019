import React from 'react';
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import './base.scss';
import Store from '../redux/store';

@withRedux((initialState) => Store.getOrCreateStore(initialState), {
	debug: false,
})
class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render () {
		const {
			Component, pageProps, store,
		} = this.props;

		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}

export default MyApp;
