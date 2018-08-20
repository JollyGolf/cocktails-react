import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Header extends Component {
  render () {
  	return (
  	  <div className="header header-flex">
  	  	<div className="fa fa-instagram fa-3x" />
  	  	<div className="vertical-line" />
  	  	<div className="fff">Instagram</div>
  	  </div>
  	);
  }
}
