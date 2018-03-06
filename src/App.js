import React, { Component } from 'react';
import './scss/css/App.css';
import logo from './images/logo.png';
import slide1Back from './images/slide1_back.png';
import slide2BackLeft from './images/slide2_left.svg';
import slide2BackRight from './images/slide2_right.svg';

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

					<div className="slide slide1 border-bottom-inset">
						<div className="background slide1-back"><img src={ slide1Back } /></div>
            <div className="slide-content-wrapper slide1-content-wrapper">
              <div className="plate plate1 border-top">
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
                <div className="fline-is">
                  <p><strong>Fline</strong> is a text detection and recognition system,
									based on our research in Artificial Intelligence</p>
                </div>
              </div>
            </div>
					</div>

          <div className="slide slide2">
						<div className="background slide2-back">
							<img src={ slide1Back } />
						</div>
            <div className="slide-content-wrapper slide2-content-wrapper">
							<div className="plate plate2 border-bottom">
								<div className="plate-title">
									Based on our research in AI
								</div>
								<div className="plate-text">
									In the core of the system (both detection and recognition) lies Artificial Intelligence: it make hypothesys, tries to interpret the result, learns on its mistakes -- all the things, that AI should do. <br />
									Concidering the complexity of the task, using AI is inevitable: it grants more sophisticated tools to classify data, rather than just plain heuristics and
								</div>
							</div>
						</div>
          </div>

          <div className="slide">
          </div>

      	</div>
			</div>
    );
  }
}

export default App;
