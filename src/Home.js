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
import {Grid,Row,Col,Clearfix,Image} from 'react-bootstrap';
import {Avatar} from '@material-ui/core';


class Home extends React.Component {
  constructor(props) {
    super(props);
  
  }
  render() {
    return (
                // START OF LANDING PAGE
      <div data-aos ="fade-down" data-aos-easing="linear" data-aos-duration="750" className="Landing">
          <header id="Landing">
            <h1 style ={{color:'white'}}>Melvin Tham</h1>
              <p style ={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
              <a href="#profile" class="scroll-down">	
				        <span class="glyphicon glyphicon-chevron-down"></span>
			        </a>
          </header>
         
          
          
                 {/* PROFILE SECTION */}

        <div id ="Profile" style={{background:'F4F4F4'}}>
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



          {/* <div className="flexCenter">           
          <Grid >
    <Row className="show-grid" >
      <Col xs={6} sm={4} className="flexCenter">
      <h2>About me</h2>
       <h3> hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello</h3>
      </Col>
      
      <div style ={{padding:'10px 20px'}}></div>
      

      <Col xs={6} sm={4} className="flexCenter"  >
      <Avatar  src={melvin} alt ="Melvin" className="melvinStyle" />
      </Col>

      <div style ={{padding:'10px 20px'}}></div>
      
      <Col xs={6} sm={4} className="flexCenter">
        <h2>Details</h2>
        <h3>hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello </h3>
      </Col>
     
      
    </Row>
  </Grid>
          </div> */}

          
        

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