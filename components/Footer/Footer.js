import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'content-box--2x'}>
        <div className={'grid--stretch-h-1x'}>
          <div className={'col-2/3'}>
            <div className={'content-box--h-1x'}>
              The Secret Lab &copy; {new Date().getFullYear()} &mdash; <a href="https://www.google.nl/maps/dir//Nieuwe+Keizersgracht+52A,+1018+DT+Amsterdam/@52.3647177,4.9022979,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c60997b43ea485:0x3138242830f578f3!2m2!1d4.9044866!2d52.3647177!3e0" target="_blank">Nieuwe Keizersgracht 52a, 1018 DT Amsterdam</a>
            </div>
          </div>
          <div className={'col-1/3 text--right'}>
            <a className={'content-box--h-1x'} href="https://www.linkedin.com/company/thesecretlabnl" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className={'content-box--h-1x'} href="https://www.instagram.com/thesecretlab/" target="_blank">
              <i className="fab fa-instagram" />
            </a>
            <a className={'content-box--h-1x'} href="https://calendly.com/femkestorm/call-with-femke" target="_blank">
              <i className="fas fa-phone" />
            </a>
            <a className={'content-box--h-1x'} href="mailto:info@thesecretlab.nl" target="_blank">
              <i className="far fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
