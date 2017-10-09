import React, { Component } from 'react';
import './App.css';
import profile from './image/profile.jpg';
import clover from './image/clover.JPG';
import { Grid, Col } from 'react-bootstrap';
import arrow from './image/arrow.png';
import pencil from './image/pencil.png';
import divider from './image/divider.svg';

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
        </div>


        <div className="About">
          <div className="About Left">
            <div id="left">
              <Grid>
                {/* <Col xs={12} sm={12} md={12}><h2><b>  EDUC   </b></h2></Col>
                <Col xs={12} sm={12} md={12}><h2><b>  ATION </b></h2></Col> */}
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

        <div className="Stack">
          <Grid>
            <Col xs={12} sm={12} md={12}><h1>My Expertise <span id="spin">&lt;
              <img
                src={pencil}
                onMouseOver={this.rotateIn}
                onMouseLeave={this.rotateOut}
                className={(this.state.mouse === false) ? "rotateOut" : 'rotateIn'} />
              &gt;</span></h1></Col>
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
            <Col xs={6} sm={6} md={6}>
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
        </div>

        <div className="Work">
          <Grid>
            <Col xs={12} sm={6} md={6}>
              <h1>Screenshot goes here</h1>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <h4>Viva Fine Foods</h4>
            </Col>
          </Grid>
          <Grid>
            <Col xs={12} sm={6} md={6}>
              <h4>Harbour Building</h4>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <h1>Screen shot goes here</h1>
            </Col>
          </Grid>
        </div>

        <div className="Project">
        </div>

        <div className="End">
        </div>





      </div >
    );
  }
}

export default App;

