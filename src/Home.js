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
  render() {
    const style= {
      textAlign: 'center',
    }

    return (
      <div data-aos ="fade-up" >
        <Navbar  >
          <NavbarBrand href="/" >
            <Typography style={{fontFamily:"Roboto",color:"Black"}}  variant="display2"> 
                Melvin Tham
            </Typography>
          </NavbarBrand>
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