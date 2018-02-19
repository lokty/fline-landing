import React, { Component } from 'react';
import './scss/css/App.css';
import logo from './images/logo.png';

class App extends Component {
  render() {
    return (
			<div id="wrapper">

      	<div className="navbar-wrapper">
					<div className="navbar">
          	<img src={ logo } className="logo" />
						<div className="links">
							<a>About</a>
							<a>Features</a>
							<a>Plans</a>
							<a>Team</a>
						</div>
						<div className="contactus">
							Contanct Us
						</div>
					</div>
				</div>

      	<div className="app">
					<div className="slide1">

					</div>
      	</div>

			</div>
    );
  }
}

export default App;
