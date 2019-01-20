import React, { Component } from 'react';
import People from '../containers/People';

export default class Home extends Component {
  render() {
    return (
      	<div className="home" style={{minHeight: window.innerHeight - 148}}>
            <div className="home__description">
                <h4>Basic People Information</h4>
                <div className="divisor"></div>
            </div>
            <People />
		</div>
    );
  }
}