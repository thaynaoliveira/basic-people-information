import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      	<header>
			<div className="header-content">
                <div className="header-content__logo">
                    <img src="../../images/white-logo.png" />
                    <h2>Basic People Information</h2>
                </div>
                <div className="header-content__dev">
                    <img src="../../images/dev.jpg" />
                </div>
            </div>
		</header>
    );
  }
}