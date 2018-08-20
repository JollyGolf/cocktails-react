import React, { Component } from 'react';

export default class Photo extends Component {
  render () {
    return (
      <img 
        onClick={this.props.onClick } 
        id={ this.props.idPost } 
        src={ this.props.srcImg } 
        alt="photography" 
        className={`photo-size-${this.props.size}`} 
      />
    );
  }
}
