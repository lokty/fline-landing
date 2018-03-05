import React, { Component } from 'react';
import './scss/css/App.css';
import logo from './images/logo.png';

class App extends Component {
  render() {
    return (
			<div id="content-wrapper">

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

					<div className="slide slide1">
            <div className="slide-content-wrapper">
              <div className="plate">
                <div className="presenting">
                  PRESENTING
                </div>
                <div className="big-letters">
                  <div className="left-row">
                  </div>
                  <div className="right-row">
                    <p>ULTIMATE<br/>
                    OPTICAL<br/>
                    CHARACTER<br/>
                    RECOGNITION</p>
                  </div>
                </div>
              </div>
            </div>
					</div>

          <div className="slide">
          </div>

          <div className="slide">
          </div>

      	</div>
			</div>
    );
  }
}

export default App;
