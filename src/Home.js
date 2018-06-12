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

  }
  render() {
    return (
      <div data-aos ="fade-up" >
        {/* <Navbar style={{backgroundColor:"Black"}} >
          <NavbarBrand href="/" >
            <Typography style={{fontFamily:"Roboto",color:"White"}}  variant="display1"> 
                Melvin Tham
            </Typography>
          </NavbarBrand>

            <Nav navbar>
              <NavItem style={{backgroundColor:"White"}} href="#">Components</NavItem>
              <NavItem style={{backgroundColor:"White"}} href="#">Components</NavItem>
              </Nav>




        </Navbar> */}
       <Navbar className="navbar-dark bg-dark" style={{height: '100px'}}expand="md">
          <NavbarBrand style={{color: 'white',fontSize:'25px',fontFamily:'Roboto'}}  href="/">Melvin Tham</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-5">
                <NavLink style={{color: 'white'}} href="#">About</NavLink>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink style={{color: 'white'}}  href="#">Contact</NavLink>
              </NavItem>
            </Nav>
        </Navbar>

       

        <div>
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
        </div>
      </div>
     
    );
  }


}

export default Home;