import React from 'react';

class Why extends React.Component {
  render() {
    return (
      <>
        <div className="main__header">
          <div style={{ 'max-width': '720px', 'text-align': 'center', position: 'relative' }}>
            <h1 title="Why." className="shadow shadow--float">
              <span>Why.</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate iusto
              odit, deleniti unde dolore
              quaerat optio itaque nemo hic suscipit? Ut earum molestias dicta blanditiis sint
              recusandae laboriosam
              placeat.</p>
            <label htmlFor="main-2">Toggle</label>
          </div>
        </div>
        <div className="main__content">
          <div className="main__content-mask-floating-asset"/>
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
              necessitatibus illo tempora incidunt vitae facilis dolor? Hic natus distinctio ducimus
              nostrum quisquam ex,
              officia vitae exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Exercitationem odit
              obcaecati officiis temporibus itaque delectus necessitatibus consequuntur laboriosam
              dolorum architecto, ex ut
              molestiae maiores, fuga libero! Dolorum repellendus in sunt?</p>
            <label htmlFor="main-2">Toggle</label>
          </div>
        </div>
      </>
    )
  }
}

export default Why
