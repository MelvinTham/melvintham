import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import nyc from './images/nyc.jpg';
import melvin from './images/Melvin.JPG';
import {Grid,Row,Col,Clearfix,Image} from 'react-bootstrap';
import {Avatar} from '@material-ui/core';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      page : '',
    };
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
  }

  handleScrollToElement(event) {
    const scrollNode = ReactDOM.findDOMNode(this.refs.profile)
      scrollNode.scrollIntoView({behavior: "smooth", block: "start"});
     }

  componentDidMount() {
    this.handleScrollToElement();
  }

  render() {
    return (
                // START OF LANDING PAGE
      <div data-aos ="fade-down" data-aos-easing="linear" data-aos-duration="750" className="Landing">  
          <header id="Landing">
            <h1 style ={{color:'white'}}>Melvin Tham</h1>
              <p style ={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
          </header>
          <div className="downArrow">
          <a href="#profile" className="scroll-down" onClick={this.handleScrollToElement}>	
				        <span className="glyphicon glyphicon-chevron-down "></span>
			        </a>
          </div>

                 {/* PROFILE SECTION */}

        <div id ="Profile" ref="profile" style={{background:'F4F4F4'}}>
          <div className="flexCenter">
              <h1>Profile</h1>
              <h5>I'm aspiring to be a Software Engineer</h5>
          <hr className="divider"/>
          <div className="container"> 
           <div className="row"> 
            <div className="col-md-4" style ={{padding:'20px 20px'}}>
              <h2>About me</h2>
              <h3> hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello</h3> 
          </div>
      <div className="col-md-4" style ={{padding:'20px 20px'}}>
      <div className="flexCenter">
      <Avatar  src={melvin} alt ="Melvin" className="melvinStyle"  />
      </div>
      </div> 
      <div className="col-md-4" style ={{padding:'20px 20px'}}>
      <h2>Details</h2>
        <h3>hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello 
          </h3>
          </div>
      </div> 
     </div>
    </div>
  </div>
          {/* Buttons For Different Pages */}

    <div className="pageButtons">
     <Button variant="outlined" style={{margin:'10px 10px'}}>hello</Button>
     <Button variant="outlined" style={{margin:'10px 10px'}}>hello</Button>
     <Button variant="outlined" style={{margin:'10px 10px'}}>hello</Button>
    </div>

      <div style={{height:'1000px',background:'green'}}></div>
  
  
           
      </div>
      
  
    );
  }

}


export default Home;