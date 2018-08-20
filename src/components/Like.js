import React, { Component } from 'react';

export default class Like extends Component {
  render () {
  	return <li className={`fas fa-heart fa-2x icon-like icon-like-${this.props.status}`} />
  } 
}
