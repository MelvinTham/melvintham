import React, { Component } from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.downButton = this.downButton.bind(this);
    
  }
  

  downButton(){
    // document.scrollingElement.scrollBy(0,window.innerHeight);
    var el = document.getElementById('div-02');
    var r1 = el.closest("#div-01");
    console.log(r1);
    r1.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    // document.getElementById('div').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  componentDidMount(){
    document.documentElement.addEventListener('scroll', this.handleScroll);
  }

  render() {

    return (
      
      <div  data-aos ="fade-up">
           <div id="nav" className ="navButtons">
          <span class ="prev"></span>  
          <span class ="next"></span>
      </div> 
       {/* <Navbar style={{height:'80px',backgroundColor:'black'}} expand="md">
          <NavbarBrand style={{color: 'white',fontSize:'25px',fontFamily:'Roboto'}}  href="/">Melvin Tham</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-5">
                <NavLink style={{color: 'white',fontFamily:'Roboto'}} href="#">About</NavLink>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink style={{color: 'white',fontFamily:'Roboto'}}  href="#">Contact</NavLink>
              </NavItem>
            </Nav>
        </Navbar>  */}

       <div id="div-01" className="background">
       {/* <button onClick= {this.downButton} data-aos="fade-up" data-aos-duration="300" data-aos-delay="400" data-aos-offset="20">button</button> */}
       </div>

       <div id="div-02" className="background2" >
          
          
          
       </div>

       <div  id="div-03" > </div>

        {/* <div>
          <Paper className ="cardSize" >
          <h1 className="centerText">hello</h1>
          </Paper>
          <Card className ="cardSize" data-aos ="fade-left">
            <CardContent>
          <Typography color="textSecondary">
            Test Test
          </Typography>

<Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}

          </CardContent>
          </Card>
        </div> */}

    
   

      </div>
      
  
    );
  }

}


export default Home;