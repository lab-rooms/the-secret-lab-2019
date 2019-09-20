import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className={`footer ${this.props.className}`}>
        <div className={'content-box--2x'}>
          <div className={'grid--stretch-h-1x'}>
            <div className={'col-1/2'}>
              <div className={'content-box--h-1x'}>
                The Secret Lab &copy; {new Date().getFullYear()}
              </div>
            </div>
            <div className={'col-1/2 text--right'}>
              <a className={'content-box--h-1x'} href="https://www.linkedin.com/company/thesecretlabnl" target="_blank">
                <i class="fab fa-linkedin-in" />
              </a>
              <a className={'content-box--h-1x'} href="https://www.instagram.com/thesecretlab/" target="_blank">
                <i class="fab fa-instagram" />
              </a>
              <a className={'content-box--h-1x'} href="https://calendly.com/femkestorm/call-with-femke" target="_blank">
                <i class="fas fa-phone" />
              </a>
              <a className={'content-box--h-1x'} href="mailto:info@thesecretlab.nl" target="_blank">
                <i class="far fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
