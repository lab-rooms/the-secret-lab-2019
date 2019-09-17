import './home.scss';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className={'main__header'}>
          <img src="/static/images/home.png" width="300" alt="" />
        </div>
      </section>
    )
  }
}

export default Home
