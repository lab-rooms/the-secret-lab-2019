import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="main main--intro">
        <div className="main__header">
          <div className="logo">
            <div><img src="/static/images/logo-def.png" alt="" /></div>
          </div>
          <div style="max-width: 620px; width: 100%; position: relative;">
            <div className="main__intro">
              <img src="/static/images/logo-def-black-white.png" width="300" alt="" />
            </div>
            <a href="#" className="button">Take me there</a>
          </div>
        </div>

        <div className="main__content">
          <div className="main__body">
            <div className="main__content-mask-floating-asset" />
            <div className="main__content-mask">
              <p className="pre-header">small and crafty</p>
              <h2>The Secret Lab is an award winning creative agency specialising in design.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias quia
                placeat facilis laborum
                ipsum accusamus in fuga numquam, dignissimos quaerat pariatur fugiat nostrum vero
                magni molestiae corporis
                repellendus labore.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem error
                eveniet aspernatur
                necessitatibus illo tempora incidunt vitae facilis dolor? Hic natus distinctio
                ducimus nostrum quisquam ex,
                officia vitae exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Exercitationem odit
                obcaecati officiis temporibus itaque delectus necessitatibus consequuntur laboriosam
                dolorum architecto, ex
                ut
                molestiae maiores, fuga libero! Dolorum repellendus in sunt?</p>
              <p><label htmlFor="main-1">Toggle</label></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
