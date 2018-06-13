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
       
       <Navbar style={{height:'80px',backgroundColor:'black'}}expand="md">
          <NavbarBrand style={{color: 'white',fontSize:'25px',fontFamily:'Roboto'}}  href="/">Melvin Tham</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-5">
                <NavLink style={{color: 'white',fontFamily:'Roboto'}} href="#">About</NavLink>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink style={{color: 'white',fontFamily:'Roboto'}}  href="#">Contact</NavLink>
              </NavItem>
            </Nav>
        </Navbar>

       <div className="background">HELLO</div>

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