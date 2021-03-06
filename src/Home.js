import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Photos from './Photos'
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import melvin from './images/Melvin.JPG';
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
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
    this.handleScrollToTop = this.handleScrollToTop.bind(this);
  }
  
  handleScrollToElement(event) {
    const scrollNode = ReactDOM.findDOMNode(this.refs.profile)
      scrollNode.scrollIntoView({behavior: "smooth", block: "start"});
     }
  
  handleScrollToTop(event){
    const scrollNode = ReactDOM.findDOMNode(this.refs.landing)
      scrollNode.scrollIntoView({behavior: "smooth", block: "start"});
       }
  componentDidMount() {
    this.handleScrollToElement();
    this.handleScrollToTop();
  }

  render() {
    
    return (
                // START OF LANDING PAGE
      <div className="Landing" ref="landing">  
          <header id="Landing">
            <h1 style ={{color:'White',fontSize:'100px'}} className="newFont" >Melvin Tham</h1>
            <hr className="divider"/>
          </header>
          <div className="downArrow">
          <a  className="scroll-down" onClick={this.handleScrollToElement}>	
				        <span className="glyphicon glyphicon-chevron-down "></span>
			        </a>
          </div>

                 {/* PROFILE SECTION */}

        <div id ="Profile" ref="profile" className=" profile" style={{background:'F4F4F4',textAlign:'center'}}>
          <div className="flexCenter">
              <h1>Profile</h1>
              <h5>Aspiring to be more than just a Software Engineer</h5>
          <hr className="divider"/>
          </div>
    <div className="flexRow">
          <div className="container"> 
           <div className="row"> 
            <div className=".col-xs-6 .col-sm-4 col-md-4" >
            <div className="flexCenter">
              <h2>About me</h2>
              <p> Hello There! My name is Melvin Tham and welcome to my interactive website. I am currently in university, 
                  learning how to be a well rounded developer.
                  I like to learn new things and working with others. If you'd like to connect with me, feel free to click on the buttons below!</p> 
            </div>
          </div>
          
      <div className=".col-xs-6 .col-sm-4 col-md-4" >
      <div className="flexCenter">
      <Avatar  src={melvin} alt ="Melvin" className="melvinStyle"  />
      </div>
      </div> 

      <div className=".col-xs-6 .col-sm-4 col-md-4" >
      <div className="flexCenter">
      <h2>Details</h2>
        <p style ={{marginBottom:'5px'}}><b>Education:</b><br/> The City College Of New York<br/></p>
        <p style ={{marginBottom:'5px'}}><b>Major:</b><br/> Computer Science <br/></p> 
        <p style ={{marginBottom:'5px'}}><b>Current Interests:</b><br/>Full Stack Development <br/> App Development<br/>Data Science</p>
          </div>
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
             Experience<Work style={{marginLeft:5}}/>
     </Button>
     <Button variant="outlined" 
             size={this.state.content !== ''?'small':'medium'} 
             style={{margin:'5px 5px',color:'#DAA520'}} 
             onClick={()=>{this.setState({ page:'Skills', color:'#DAA520'})}}>
             Skills<Code style={{marginLeft:5}}/>
    </Button>
    <Button variant="outlined" 
             size={this.state.content !== ''?'small':'medium'} 
             style={{margin:'5px 5px',color:'#7f4145'}} 
             onClick={()=>{this.setState({ page:'Projects',color:'#7f4145'})}}>
             Projects<Project style={{marginLeft:5}}/>
    </Button>
    <Button variant="outlined" 
             size={this.state.content !== ''?'small':'medium'} 
             style={{margin:'5px 5px',color:'#006e6d'}} 
             onClick={()=>{this.setState({ page:'Photos',color:'#006e6d'})}}>
             Photos<Camera style={{marginLeft:5}}/>
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
      this.state.page === 'Photos'?
      <Photos />:null
    }
        {/* CONTACT SECTION */}

    <div id="Contact" className='contact' >
      <div className="flexCenter" style={{height:'100px',backgroundColor:'#222222',marginTop:"40px"}}>
        <Typography variant="display1" style={{color:'white'}}>Contact Me!</Typography>
      </div>
      <div className="flexRow" style={{backgroundColor:'#222222'}}>
       <a href = "https://www.linkedin.com/in/melvin-tham/"  target="_blank"><i className = "fab fa-linkedin fa-3x" style = {{color: "rgb(0, 119, 181)",padding:'3px 3px',margin:'3px 3px'}}></i></a>
       <a href = "https://github.com/MelvinTham"  target="_blank"><i className = "fab fa-github-square fa-3x " style = {{color: "black",padding:'3px 3px',margin:'3px 3px'}}></i></a>
       <a href = "mailto:melvintham1997@gmail.com"  target="_blank"><i className = "fas fa-envelope fa-3x" style = {{color: "white",padding:'3px 3px',margin:'3px 3px'}}></i></a>
       <a href = "https://www.instagram.com/tham_melvin/" target="_blank"><i className = "fab fa-instagram  fa-3x" style = {{color:"#e4405f",padding:'3px 3px',margin:'3px 3px'}}></i></a>
            </div>
      <div id="footer" className="flexCenter" style={{height:'200px',backgroundColor:'#222222'}}>
      <div className="downArrow ">
          <a  className="scroll-down" onClick={this.handleScrollToTop}>	
				        <span className="glyphicon glyphicon-chevron-up "></span>
			        </a>
          </div>
      </div>
    </div>
           
      </div>
      
  
    );
  }

}


export default Home;