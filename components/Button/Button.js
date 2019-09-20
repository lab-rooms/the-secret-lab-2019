import React from 'react';
import Link from 'next/link';
import './button.scss';

class Button extends React.Component {
  render() {
    return (
      <Link href={this.props.href}>
        <a className={`button ${this.props.className}`} target={this.props.target}>
          {this.props.children}
        </a>
      </Link>
    )
  }
}

export default Button
