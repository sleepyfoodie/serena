import React, { Component } from 'react';
import './App.css';
import { Grid, Col, DropdownButton, MenuItem, Row } from 'react-bootstrap';
import arrow from './image/arrow.png';
import pencil from './image/pencil.png';
import divider from './image/divider.svg';
import viva from './image/viva.png';
import paulkei from './image/paulkei.png';
import jollyhippo from './image/jollyhippo.png';
import blackjack from './image/blackjack.png';

//icon
import email from './image/email.png';
import github from './image/github.png';
import instagram from './image/instagram.png';
import linkedin from './image/linkedin.png';

//frontend
import bootstrap from './image/bootstrap.png';
import css from './image/css.svg';
import html from './image/html.png';
import javascript from './image/javascript.png';
import jquery from './image/jquery.png';
import materialize from './image/materialize.svg';
import sass from './image/sass.png';
import react from './image/react.png';

//backend
import express from './image/express.png';
import mongo from './image/mongodb.png';
import node from './image/node.png';
import postgres from './image/postgres.png';

//support
import npm from './image/npm.png';
import yarn from './image/yarn.png';
import aws from './image/aws.png';
import heroku from './image/heroku.png';
import surge from './image/surge.png';


class App extends Component {
  constructor() {
    super()
    this.state = {
      mouse: false
    }
    this.rotateIn = this.rotateIn.bind(this)
    this.rotateOut = this.rotateOut.bind(this)
  }

  rotateIn() {
    this.setState({
      mouse: true
    })
  }

  rotateOut() {
    this.setState({
      mouse: false
    })
  }


  render() {
    return (
      <div className="App">

        <div className="Top">
          <div id="intro">
            <h1>Hello. I'm Serena. I build </h1>
            <h1 id="typing">
              <a
                className="typewrite"
                data-period="2000"
                data-type='[ "Web Apps.", "Corporate Websites.", "Portfolios." ]'>
                <span className="wrap"></span>
              </a>
            </h1>
          </div>
          <div id="menu">
            <h1>&lt;
              <img
                src={pencil}
                onMouseOver={this.rotateIn}
                onMouseLeave={this.rotateOut}
                className={(this.state.mouse === false) ? "rotateOut" : 'rotateIn'} />&gt;
          </h1>
          </div>
          <div id="item">
            <DropdownButton pullRight>
              <MenuItem eventKey="1" href="#About"><h5>About Me</h5></MenuItem>
              <MenuItem eventKey="2" href="#Stack"><h5>My Expertise</h5></MenuItem>
              <MenuItem eventKey="3" href="#Work"><h5>My Work</h5></MenuItem>
              <MenuItem eventKey="4" href="#Project"><h5>Personal Projects</h5></MenuItem>
              <MenuItem eventKey="5" href="#End"><h5>Contact</h5></MenuItem>
            </DropdownButton>
          </div>
        </div>


        <div className="About" id="About">
          <div className="About Left">
            <div id="left">
              <Grid>
                <Col xs={12} sm={4} md={4}><h2>University of British Columbia</h2></Col>
                <div id="scroll">
                  <Col xs={12} sm={8} md={8}><h4>
                    <p>In 2013, I completed my Bachelor of Arts with a major in <i>Cognitive Systems and Speech Sciences</i>.
                    Upon graduation, I began working closely with children diagnosed with Autism.
                    This was a very fullfilling experience that helped me understand others more and communicate better.
                    However, after a few years, I decided that I wanted something different for my career.</p>
                  </h4></Col>
                </div>
              </Grid>
              <Grid>
                <Col xs={12} sm={4} md={4}><h2>Brain Station PCC</h2></Col>
                <div id="scroll">
                  <Col xs={12} sm={8} md={8}><h4>In 2017, I enrolled in Brain Station to get my Full-Stack Web Development Certificate.
                    <p>Before my enrollment, I grew an interest in html and css. I wanted to build a website from scratch,
                    but felt frustrated that I did not have the tools to do so. I am very happy that I have taken this course
                    as it has allowed me to build new skills for a web app.</p>
                  </h4></Col>
                </div>
              </Grid>
            </div>
          </div>
          <div className="About Right">
            <div id="right">
              <h1><p>Serena</p><p>Kei</p><p><img src={arrow} /></p></h1>
            </div>
          </div>
        </div>

        <div className="Stack" id="Stack">
          <Grid>
            <Col xs={12} sm={12} md={12}><h1>My Expertise <span id="spin">&lt;
              <img
                src={pencil}
                onMouseOver={this.rotateIn}
                onMouseLeave={this.rotateOut}
                className={(this.state.mouse === false) ? "rotateOut" : 'rotateIn'} />
              &gt;</span></h1>
            </Col>
          </Grid>
          <Grid>
            <Col xs={12} sm={6} md={6}>
              <p><img src={html} /><img src={css} /><img src={javascript} /><img src={sass} />
                <img src={bootstrap} /><img src={materialize} /><img src={react} /><img src={jquery} /></p>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <h1>Frontend</h1>
              <h1>..</h1>
              <h4>These are some of the tools I use for creating a website.
                I started off with using javascript, html, css, jquery to create web pages,
                but I also have been practicing a lot on reactJS.
                There are many libraries available for react that can help better customize animations and trasitions
                </h4>
            </Col>
          </Grid>
          <Grid>
            <Col xs={3} sm={3} md={3}><h1>..</h1></Col>
            <Col xs={6} sm={6} md={6}>
              <div id="divide">
                <img src={divider} />
              </div>
            </Col>
            <Col xs={3} sm={3} md={3}><h1>..</h1></Col>
          </Grid>
          <Grid>
            <Col xs={12} sm={6} md={6}>
              <h1>Backend</h1>
              <h1>..</h1>
              <h4>Needless to say, it is impossible to create a webapp without backend tools in your pocket.
                  NodeJS allows me to continue using javascript without having to use a backend language.
                </h4>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <p><img src={mongo} /><img src={postgres} /><img src={express} /><img src={node} /></p>
            </Col>
          </Grid>
          <Grid>
            <Col xs={3} sm={3} md={3}><h1>..</h1></Col>
            <Col xs={6} sm={6} md={6}>
              <div id="divide">
                <img src={divider} />
              </div>
            </Col>
            <Col xs={3} sm={3} md={3}><h1>..</h1></Col>
          </Grid>
          <Grid>
            <Col xs={12} sm={6} md={6}>
              <p><img src={surge} /><img src={aws} /><img src={yarn} /><img src={npm} /><img src={heroku} /></p>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <h1>Other Tools</h1>
              <h1>..</h1>
              <h4>Other than the basics for frontend and backend development, there are also other handy packages
                  and services that can help creating a web app much easier.
                </h4>
            </Col>
          </Grid>
        </div>

        <div className="Work" id="Work">
          <Grid>
            <Col xs={12} sm={12} md={12}>
              <div id="workTitle"><h1>My Work
              <span id="spin"> &lt;
              <img
                    src={pencil}
                    onMouseOver={this.rotateIn}
                    onMouseLeave={this.rotateOut}
                    className={(this.state.mouse === false) ? "rotateOut" : 'rotateIn'} />
                  &gt;</span>
              </h1></div>
            </Col>
          </Grid>
          <Grid>
            <Col xs={12} sm={6} md={6}>
              <div id="screenshot">
                <a target="_blank" href="www.paulkei.surge.sh"><img src={paulkei} /></a>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <div id="harbour">
                <a target="_blank" href="www.paulkei.surge.sh">
                  <h1>Harbour Building</h1>
                </a>
                <br></br>
                <h4><b>Frontend development. Web design</b></h4>
                <br></br>
                <h4>A platform for an entrepreneur who transitioned from a buyer to an agent in the Kitchen and Bath business market.
                This is a portfolio that summarizes his life's work in a website.
              </h4>
              </div>
            </Col>
          </Grid>
          <Grid>
            <Col xs={12} sm={12} md={12}>
              <span id="right"><h1>..</h1></span>
            </Col>
          </Grid>
          <Grid>
            <Col xs={12} sm={6} md={6}>
              <a target="_blank" href="www.vivafinefoods.surge.sh">
                <h1>Viva Fine Foods</h1>
              </a>
              <br></br>
              <h4><b>Frontend development.Web design</b></h4>
              <br></br>
              <h4>Located at one of the most beautiful places in Greater Vancouver,
                by Kitsilano beach, Viva Fine Foods & Bakery offers some of the best coffee and pastry in town. </h4>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <div id="screenshot">
                <a target="_blank" href="www.vivafinefoods.surge.sh"><img src={viva} /></a>
              </div>
            </Col>
          </Grid>
        </div>


        <div className="Project" id="Project">
          <h1>Projects &lt;
              <img
              src={pencil}
              onMouseOver={this.rotateIn}
              onMouseLeave={this.rotateOut}
              className={(this.state.mouse === false) ? "rotateOut" : 'rotateIn'} />
            &gt;</h1>
          <br></br>
          <br></br>

          <Grid>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <a tartget="_blank" href="http://35.164.174.126/"><img src={jollyhippo} /></a>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <h1><a target="_blank" href="http://35.164.174.126/">Jolly Hippo</a></h1>
                <br></br>
                <h4><b>MongoDB, Express, Axios, ReactJS, NodeJS, AWS</b></h4>
                <br></br>
                <h4>
                  Since I studied full stack web development, I began a project that would utilize all of my skills set.
                    Jolly Hippo is a web app that connects parents together, to trade hours for babysitting each other's children.
                    It is a transaction-free process for busy hardworking parents who are looking for help.
                    The app is still under constructions as the scope of the project is quite large.
                  </h4>
              </Col>
            </Row>
            <br></br>
            <h1>..</h1>
            <br></br>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <h1><a target="_blank" href="https://github.com/sleepyfoodie/pairedprogrammingproject">Black Jack</a></h1>
                <br></br>
                <h4><b>Frontend development, HTML, CSS, Javascript</b></h4>
                <br></br>
                <h4>
                  As a way to practice javascript logic, I created a game of blackjack for a paired programming project.
                        It felt simple at the start, but as more conditions such as "ace" could be "1 or 11" and
                        dealer keeps hitting until it reaches "17", I had to use javascript logic.
                        This was a really good practice!
                      </h4>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <a target="_blank" href="https://github.com/sleepyfoodie/pairedprogrammingproject">
                  <img src={blackjack} /></a>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="End" id="End">
          <h1>Contact Me</h1>
          <br></br>
          <h2>cerynaa@gmail.com</h2>
          <br></br>
          <br></br>
          <Grid>
            <Row>
              <Col md={12} sm={6} xs={6}>
                <div className="social">
                  <a href="mailto:cerynaa@gmail.com" target="_top">
                    <img src={email} />
                  </a>
                  <a target="_blank" href="https://github.com/sleepyfoodie">
                    <img src={github} />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/serena-kei-633119140">
                    <img src={linkedin} />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/sleepyfoodie/">
                    <img src={instagram} />
                  </a>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>





      </div >
    );
  }
}

export default App;

