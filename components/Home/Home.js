import React from 'react';
import './home.scss';
import Header from '../Header';
import Hero from '../Hero';
import AboutHome from '../AboutHome';
import Footer from '../Footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <AboutHome />
        <Footer />
      </>
    )
  }
}

export default Home
