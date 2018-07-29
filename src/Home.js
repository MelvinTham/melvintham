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
class Home extends Component {
  constructor(props) {
    super(props);
    
    this.downButton = this.downButton.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    
  }
  

  downButton(){
    // document.scrollingElement.scrollBy(0,window.innerHeight);
    var el = document.getElementById('div-02');
    var r1 = el.closest("#div-01");
    console.log(r1);
    r1.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    // document.getElementById('div').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

handleScroll(){
  var nav = document.getElementById('navButtons');
  var sticky = nav.offsetTop;
  if (window.pageYOffset >= sticky) {
    console.log("it works!");
    nav.classList.add("sticky");
  } else {
    console.log("it doesnt works!");
    nav.classList.remove("sticky");
  }
}
  componentDidMount(){
    document.documentElement.addEventListener('scroll', this.handleScroll);
  }

  render() {

   

    return (
      <div className="Main" data-aos ="fade-down"  data-aos-easing="linear" data-aos-duration="750">
          {/* <div id="nav" className ="navButtons">
          <span className ="prev"></span>  
          <span className ="next"></span>
          </div>  */}
      
        <div id="div-01" >
        
        <Avatar src={melvin} alt ="Melvin" className="melvinStyle" />  
          
          
       
       
       {/* <button onClick= {this.downButton} data-aos="fade-up" data-aos-duration="300" data-aos-delay="400" data-aos-offset="20">button</button> */}
       </div>

       <Paper className = "textStyle" data-aos="fade-down">
          <Typography variant="headline" color="primary">Melvin Tham</Typography>
          
          </Paper>

      </div>
      
  
    );
  }

}


export default Home;