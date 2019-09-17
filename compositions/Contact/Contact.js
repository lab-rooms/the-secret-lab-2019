import React from 'react';
import Card from '../../components/Card';
import './contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">

        <div className={'main__header'}>
          <Card>
            <p className="pre-header">meet and greet</p>
            <h2>Come in for a visit and we will give you the grand tour</h2>
            <p>
              <strong>The Secret Lab BV</strong><br />
              Nieuwe Keizersgracht 52a<br />
              1018 DT Amsterdam<br />
              <a href="mailto:info@thesecretlab.nl">info@thesecretlab.nl</a>
            </p>
          </Card>
        </div>
      </section>
    )
  }
}

export default Contact
