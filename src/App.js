import React, { Component } from 'react';
import Plx from 'react-plx'
import './scss/css/App.css';
import logo from './images/logo.png';
import slide1Back from './images/slide1_back.png';
import slide2BackLeft from './images/slide2_left.svg';
import slide2BackRight from './images/slide2_right.svg';
import slide3BackLeft from './images/slide3_left.svg';
import slide3BackRight from './images/slide3_right.svg';
import slide4BackBlurred from './images/slide4_blurred.png';
import slide4BackTop from './images/slide4_blocks.svg';
import slide1Iva from './images/slide1_iva.png';

class App extends Component {
  sendEmail(name, target) {
    var data = new FormData();
    data.append("from",  "Fline Confirmation Robot <robot@flineocr.com>");
    data.append("to", "vasiljev-iv@yandex.ru");
    data.append("subject", "Fline Demo Request Confirmation");
    data.append("html", '<html><p><strong>Hello ' + name + '!</strong></p>You are getting this email as a confirmation of your demo request. We will send you more details about it later.<br/></p><p>Vasilev Ivan</p></html>');

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://api.mailgun.net/v3/mg.flineocr.com/messages");
    xhr.setRequestHeader ("Authorization", "Basic " + btoa("api:key-2df17391a50cd9eb9af61a8296ce008f" ));
    xhr.setRequestHeader("Cache-Control", "no-cache");

    xhr.send(data);
  }

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
						<div className="contactus select-blue">
							<strong>Contact Us</strong>
						</div>
					</div>
				</div>

      	<div className="app">

					<div className="slide slide1 border-bottom-inset">
						<div className="background slide1-back">
								<Plx className=""
									parallaxData={ [
											{
												start: 'self',
												duration: 500,
												name: 'first',
												properties: [
													{
														startValue: 1,
														endValue: 200,
														property: 'translateX',
													}
												]
											}]
										}>
							<img src={ slide1Back } />
						</Plx>
						</div>
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
								<a onClick={() => this.sendEmail('Ivan', 'vasiljev.ivan@gmail.com')} className="action-button">
									Schedule demo
								</a>
								<div style={{ marginTop: 'auto', marginBottom: '10px' }}>
									<img src={ slide1Iva } style={{ width: '130px', height: 'auto' }}/>
								</div>
              </div>
            </div>
					</div>

          <div className="slide slide2">
						<div className="background slide2-back">
							<div className="slide2-back-left">
								<Plx className="" style={{ marginTop: '350px', position: 'absolute', right: '0', zIndex: '11' }}
									parallaxData={ [
											{
												start: 'self',
												duration: 200,
												name: 'second_left',
												properties: [
													{
														startValue: 0,
														endValue: 1,
														property: 'opacity',
													},
													{
														startValue: -1580,
														endValue: -1270,
														property: 'translateX',
													},
													{
														startValue: 530,
														endValue: 530,
														property: 'scale',
													}
												]
											}]
										}>
									<div>&nbsp;</div>
									<img src={ slide2BackLeft } />
								</Plx>
							</div>
							<div className="slide2-back-right">
								<Plx className=""
									parallaxData={ [
											{
												start: 'self',
												duration: 400,
												name: 'second_left',
												properties: [
													{
														startValue: 0,
														endValue: 1,
														property: 'opacity',
													},
													{
														startValue: 30,
														endValue: 30,
														property: 'scale',
													},
													{
														startValue: 1000,
														endValue: 0,
														property: 'translateX',
													},
													{
														startValue: 400,
														endValue: 400,
														property: 'translateY',
													}
												]
											}]
										}>
									<div>&nbsp;</div>
									<img src={ slide2BackRight } />
								</Plx>
							</div>
						</div>
            <div className="slide-content-wrapper slide2-content-wrapper">
							<div className="plate plate2">
								<div className="plate-title">
									Based on our <br/>research in <span className="select-red">AI</span>
								</div>
								<div className="plate-text">
									<p>In the core of the system (both detection and recognition) lies <span className="select-red"><strong>Artificial Intelligence</strong></span>: it make hypothesys, tries to interpret the result, learns on its mistakes -- all the things, that AI should do.</p>
									<p>Concidering the complexity of the task, using AI is inevitable: it grants more sophisticated tools to classify data, rather than just plain heuristics and </p>
								</div>
							</div>
						</div>
          </div>


          <div className="slide slide3 border-top-inset">
						<div className="background slide3-back">
							<div className="slide3-back-left">
								<Plx className="" style={{ marginTop: '350px', position: 'absolute', right: '0', zIndex: '11' }}
									parallaxData={ [
											{
												start: 'self',
												duration: 200,
												name: 'second_left',
												properties: [
													{
														startValue: 0,
														endValue: 1,
														property: 'opacity',
													},
													{
														startValue: -500,
														endValue: -400,
														property: 'translateX',
													},
													{
														startValue: 120,
														endValue: 120,
														property: 'scale',
													}
												]
											}]
										}>
									<div>&nbsp;</div>
									<img src={ slide3BackLeft } />
								</Plx>
							</div>
							<div className="slide3-back-right">
								<Plx className=""
									parallaxData={ [
											{
												start: 'self',
												duration: 400,
												name: 'second_left',
												properties: [
													{
														startValue: 0,
														endValue: 1,
														property: 'opacity',
													},
													{
														startValue: 20,
														endValue: 20,
														property: 'scale',
													},
													{
														startValue: 300,
														endValue: 50,
														property: 'translateX',
													},
													{
														startValue: 300,
														endValue: 300,
														property: 'translateY',
													}
												]
											}]
										}>
									<div>&nbsp;</div>
									<img src={ slide3BackRight } />
								</Plx>
							</div>
						</div>
            <div className="slide-content-wrapper slide3-content-wrapper">
							<div className="plate plate3 border-bottom">
								<div className="plate-title">
									BUt WE DON'T USE <span className="select-blue">NEURAL NETWORKS</span>
								</div>
								<div className="plate-text">
									<p>Even though AI is a major part of our system, we don't use classic or any novel kind of <span className="select-blue"><strong>neural networks</strong></span>. We believe, that it's not the most effective and promising way to solve problems, that AI has to solve.</p>
									<p>Our approach to Artificial Intelligence is algorythmical: it's much more agile and, more importantly, transparent, meaning rules, that our AI constructs via learning process, are explicit and representable in the form, that human can understand.</p>
								</div>
							</div>
						</div>
          </div>

          <div className="slide slide4">
						<div className="background slide4-back">
							<div className="blocks" >
								<img src={ slide4BackTop } />
							</div>
						</div>
            <div className="slide-content-wrapper slide4-content-wrapper">
							<div className="plate plate4">
								<div className="plate-title">
									Our goal is to create the <span className="select-red">best solution</span> on the market
								</div>
								<div className="plate-text">
									<p>Research and developement of the system took more than 6 years now, we tried several approaches to the problem, and now we're pretty sure, that the one we end up with is the best.</p>
									<p>Results look promising too: on <span className="select-red"><strong>ICDAR</strong></span> test dataset our system shows these numbers:</p>
									<p>These numbers are not final, the system has a lot of potential. We plan to crank the f-number up to about 96% in the next 6 months.</p>
								</div>
                <div className="numbers-cards">
                  <div className="numbers">
                    <div className="number">
                      <div className="field">Recall</div>
                      <div className="dots"></div>
                      <div className="value">59,2%</div>
                    </div>
                    <div className="number">
                      <div className="field">Presicion</div>
                      <div className="dots"></div>
                      <div className="value">41,3%</div>
                    </div>
                    <div className="number">
                      <div className="field">F-number</div>
                      <div className="dots"></div>
                      <div className="value">50,2%</div>
                    </div>
                    <div className="numbers-date">January 2017</div>
                  </div>
                  <div className="numbers">
                    <div className="number">
                      <div className="field">Recall</div>
                      <div className="dots"></div>
                      <div className="value">79,4%</div>
                    </div>
                    <div className="number">
                      <div className="field">Presicion</div>
                      <div className="dots"></div>
                      <div className="value">85%</div>
                    </div>
                    <div className="number">
                      <div className="field">F-number</div>
                      <div className="dots"></div>
                      <div className="value">82,5%</div>
                    </div>
                    <div className="numbers-date" style={{ fontWeight: "600", color: "#3a8cf5", fontStyle: "normal" }}>March 2018 (current)</div>
                  </div>
                  <div className="numbers">
                    <div className="number">
                      <div className="field">Recall</div>
                      <div className="dots"></div>
                      <div className="value">82,4%</div>
                    </div>
                    <div className="number">
                      <div className="field">Presicion</div>
                      <div className="dots"></div>
                      <div className="value">89%</div>
                    </div>
                    <div className="number">
                      <div className="field">F-number</div>
                      <div className="dots"></div>
                      <div className="value">85,7% </div>
                    </div>
                    <div className="numbers-date">July 2018 (estimation)</div>
                  </div>
                </div>
              </div>
						</div>
          </div>
      <div className="slide slide6">
        <div className="background border-top slide6-back">
          <div className="blocks" >
          </div>
        </div>
        <div className="slide-content-wrapper slide6-content-wrapper">
          <div className="plate plate6">
            <div className="plate-title" style={{ marginBottom: '20px' }}>
               <span className="select-blue">Pros</span> and  <span className="select-red">cons</span> to consider
            </div>
            <div className="miniheader blue">Pros</div>
            <div className="plate-text blue">
             <p>Fline will be the the most robust and comprehensive solution on the market</p>
             <p>our claim is that in its final form our system will be
able to detect and recognize the text as good as human</p>
             <p>that means, that it will be source-agnostic: digital-born and real-world images are use the same algorithm</p>
             <p>our claim is that in its final form our system will be
able to detect and recognize the text as good as human</p>
             <p>AI behind the system can also be reused in other fields
like natural language processing, information retriaval
and decision making</p>
            </div>
            <div className="miniheader">Cons</div>
            <div className="plate-text">
             <p>the system is a work in progress, not a product yet</p>
             <p>it needs a complete rewrite and massive optimization</p>
             <p>since we had no investments in the past several years, only
the core team members are still working on the project</p>
           </div>
          </div>
        </div>
      </div>

      <div className="slide slide5">
						<div className="background slide5-back border-top border-bottom">
						</div>
            <div className="slide-content-wrapper slide5-content-wrapper">
							<div className="team-title">
								Our team
							</div>
							<div className="faces">
								<div className="faces-columns-wrapper">
									<div className="face-face ivan">

									</div>
									<div className="faces-name">
										Ivan
									</div>
									<div className="faces-status">
										Co-Founder and Head of Development Unit
									</div>
									<div className="faces-cv">
										Founded his first technological startup on text recognition at the first course of the university, later participated in startups from different areas such as photogrammetry, 3d printing and scanning, image recognition etc, in 2015 became the co-founder of the company IVA.
									</div>
								</div>
								<div className="faces-columns-wrapper">
									<div className="face-face viktor">

									</div>
									<div className="faces-name">
										Viktor
									</div>
									<div className="faces-status">
										Founder, CEO and Head of Financial Unit
									</div>
									<div className="faces-cv">
										Started working in family business at the age of 16, since 2010 is a serial entrepreneur, the last 5 years is engaged in supporting small business first working in a government institution later in the alma mater, in 2015 founded the company IVA.
									</div>
								</div>

								<div className="faces-columns-wrapper">
									<div className="face-face alla">

									</div>
									<div className="faces-name">
										Sergey
									</div>
									<div className="faces-status">
										Co-Owner and Head of the Marketing and PR Unit
									</div>
									<div className="faces-cv">
										Began building career in sales and marketing in parallel with learning at the university, accumulated 10 years of experience, joined the team of IVA in 2017.
									</div>
								</div>
							</div>
              </div>
						</div>
            <div className="slide slide7">
              <div className="background border-top slide7-back">
                <div className="blocks" >
                </div>
              </div>
              <div className="slide-content-wrapper slide7-content-wrapper">
                <div className="plate plate7">
                  <div className="plate-text" style={{ marginBottom: '20px', width: '300px' }}>
                    <p style={{ color: 'gray', textAlign: 'center' }}>Thanks for your time!</p>
                    <div style={{ marginTop: '40px'}} className="action-button">
                      Schedule demo
                    </div>
                    <p style={{ textAlign: 'center' }}>or write us to <a mailto="vasiljev.ivan@gmail.com"><span style={{ color: '#eb6d67' }}> vasiljev.ivan@gmail.com</span></a></p>
                  </div>
                </div>
              </div>
            </div>

       	</div>
			</div>
    );
  }
}

export default App;

