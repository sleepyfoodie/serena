import React, { Component } from 'react';
import './App.css';
import profile from './image/profile.jpg';
import clover from './image/clover.JPG';
import { Grid, Col } from 'react-bootstrap';
import VisibilitySensor from 'react-visibility-sensor';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange() {
    this.setState({
      isVisible: true
    }, () => console.log('element is here')
    )
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
        <VisibilitySensor
          scrollCheck
          scrollThrottle={100}
          intervalDelay={8000}
          containment={this.props.containment}
          onChange={this.onChange}
          minTopValue={this.props.minTopValue}
          partialVisibility={this.props.partialVisibility}
          offset={this.props.offset}>
          <div className='About' />
        </VisibilitySensor>
        <div className="About">
          <div className="About Left">
            <div id="left">
              <Grid>
                <Col xs={12} sm={12} md={12}><h1>Education</h1></Col>
                <Col xs={12} sm={4} md={4}><h2>University of British Columbia</h2></Col>
                <div className={(this.state.isVisible === false) ? "scroll" : ""}>
                  <Col xs={12} sm={8} md={8}><h3>
                    In 2013, I completed my Bachelor of Arts with a major in <i>Cognitive Systems and Speech Sciences</i>.
                    Upon graduation, I began working closely with children diagnosed with Autism.
                    This was a very fullfilling experience that helped me understand others more and communicate better.
                    However, after a few years, I decided that I wanted something different for my career.
                    </h3></Col>
                </div>
              </Grid>
              <Grid>
                <Col xs={12} sm={4} md={4}><h2>Brain Station Private Career College</h2></Col>
                <div className={(this.state.isVisible === false) ? "scroll" : ""}>
                  <Col xs={12} sm={8} md={8}><h3>In 2017, I enrolled in Brain Station to get my Full-Stack Web Development Certificate.
                    Before my enrollment, I grew an interest in html and css. I wanted to build a website from scratch,
                    but felt frustrated that I did not have the tools to do so. I am very happy that I have taken this course
                    as it has allowed me to build new skills for a web app.
                    </h3></Col>
                </div>
              </Grid>
              <Grid>
                <Col xs={12} sm={12} md={12}><h1>cerynaa@gmail.com</h1></Col>
              </Grid>
            </div>
          </div>
          <div className="About Right">
            <div id="right">
              <h1><p>Serena</p><p>Kei</p></h1>
            </div>
          </div>
        </div>

        <div className="Stack">
        </div>

        <div className="Work">
        </div>

        <div className="Project">
        </div>

        <div className="End">
        </div>





      </div>
    );
  }
}

export default App;
