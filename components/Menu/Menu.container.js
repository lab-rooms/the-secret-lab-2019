import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';

@connect(
  state => ({
    menu: state.kentico.menu,
  })
)
class MenuContainer extends Component {
  render() {
    return this.props.menu ? <Menu {...this.props} /> : null;
  }
}

export default MenuContainer
