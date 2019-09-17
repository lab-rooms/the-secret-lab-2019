import React from 'react';
import Link from 'next/link';
import './logo.scss';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <Link href="/"><div><img src="/static/images/logo-def.png" alt="" /></div></Link>
      </div>
    )
  }
}

export default Logo
