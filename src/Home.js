import React, { Component } from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import nyc from './images/nyc.jpg';
import melvin from './images/Melvin.JPG';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import {Avatar} from '@material-ui/core';


class Home extends React.Component {
  constructor(props) {
    super(props);
  
  }
  render() {
    return (
      <div data-aos ="fade-down"  data-aos-easing="linear" data-aos-duration="750">
          <header id="Landing">
            <h1 style ={{color:'white'}}>Melvin Tham</h1>
           
              <p style ={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
          </header>
  
          <div class="row">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
    <Avatar src={melvin} alt ="Melvin" className="melvinStyle" /> 
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>

          {/* <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
              </Col>
              <Col xs={6} md={4}>
              <Avatar src={melvin} alt ="Melvin" className="melvinStyle" /> 
              </Col>
              <Col xs={6} md={4}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
              </Col>
              </Row>
          </Grid> */}
  {/* <section id="section-c">
    <div className="box-1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
    </div>
    <div className="box-2">
    <Avatar src={melvin} alt ="Melvin" className="melvinStyle" /> 
    </div>
    <div className="box-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
      
    </div>
  </section> */}


        {/* <div id ="div-01" >
            hello
           
        </div> */}

        {/* <div id="div-02" data-aos ="fade-down" data-aos-easing="linear" data-aos-duration="750">
        
        <Avatar src={melvin} alt ="Melvin" className="melvinStyle" />  
 
       </div>

       <Paper className = "textStyle" data-aos="fade-down">
          <Typography variant="headline" color="primary">Melvin Tham</Typography>
          
          </Paper> */}
           
      </div>
      
  
    );
  }

}


export default Home;