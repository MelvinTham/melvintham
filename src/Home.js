import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Contact from './Contact'
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import melvin from './images/Melvin.JPG';
import {Grid,Row,Col,Clearfix,Image} from 'react-bootstrap';
import {Avatar,IconButton} from '@material-ui/core';
import Close from '@material-ui/icons/Cancel';
import Work from '@material-ui/icons/Work';
import Project from '@material-ui/icons/Build';
import Code from '@material-ui/icons/Code';
import Camera from '@material-ui/icons/CameraAlt';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      page : '',
      color : '',
    };
    console.log("page state is " + this.state.page);
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
      <div data-aos ="fade-up" data-aos-easing="linear" data-aos-duration="750" className="Landing">  
          <header id="Landing">
            <h1 style ={{color:'white'}}>Melvin Tham</h1>
              <p style ={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
          </header>
          <div className="downArrow">
          <a  className="scroll-down" onClick={this.handleScrollToElement}>	
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
     <Button variant="outlined" 
             size={this.state.content !== ''?'small':'medium'} 
             style={{margin:'5px 5px',color:' #004d99'}} 
             onClick={()=>{this.setState({ page:'Experience', color:'#004d99'})}}>
             Experience<Work style={{marginLeft:7}}/>
     </Button>
     <Button variant="outlined" 
             size={this.state.content !== ''?'small':'medium'} 
             style={{margin:'5px 5px',color:'#DAA520'}} 
             onClick={()=>{this.setState({ page:'Skills', color:'#DAA520'})}}>
             Skills<Code style={{marginLeft:7}}/>
    </Button>
    <Button variant="outlined" 
             size={this.state.content !== ''?'small':'medium'} 
             style={{margin:'5px 5px',color:'#7f4145'}} 
             onClick={()=>{this.setState({ page:'Projects',color:'#7f4145'})}}>
             Projects<Project style={{marginLeft:7}}/>
    </Button>
    <Button variant="outlined" 
             size={this.state.content !== ''?'small':'medium'} 
             style={{margin:'5px 5px',color:'#006e6d'}} 
             onClick={()=>{this.setState({ page:'Photos',color:'#006e6d'})}}>
             Photos<Camera style={{marginLeft:7}}/>
    </Button>
     {
         this.state.page !== ''?
          <IconButton data-aos="fade-left" onClick={()=>{this.setState({page:''})}} style={{color:this.state.color}}>
            <Close/>
           </IconButton>
           : null
     }

    </div>
    {
      this.state.page !== ''?
      <Typography variant="headline" className="flexCenter" style={{ marginTop: "15px",color:this.state.color}} >
      {this.state.page.toUpperCase()}
        </Typography>: null

    }
    {
      this.state.page === 'Experience'?
      <Experience />:
      this.state.page === 'Skills'?
      <Skills />:
      this.state.page === 'Projects'?
      <Projects />:
      this.state.page === 'Contact'?
      <Contact />:null
    }
    <div id="Contact">
      <div className="flexCenter" style={{height:'100px',backgroundColor:'#222222',marginTop:"40px"}}>
        <Typography variant="display1" style={{color:'white'}}>Contact Me!</Typography>
      </div>

      <div id="footer" style={{height:'100px',backgroundColor:'#222222'}}></div>
    </div>
           
      </div>
      
  
    );
  }

}


export default Home;