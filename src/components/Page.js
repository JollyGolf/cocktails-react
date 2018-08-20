import React, { Component } from 'react';
import Header from './Header';
import Photos from './../containers/Photos';
import DetailsPhoto from './../containers/DetailsPhoto';

export default class Page extends Component {
  render() {
  	return (
      <div className="page" >
        <Header />
        <hr className="hr" />
        <Photos />
        <hr className="hr" />
        <DetailsPhoto /> 
      </div>
    )
  }
}
