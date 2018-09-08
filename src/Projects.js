import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import melvin from './images/Melvin.JPG';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import './Home.css';
import './Projects.css';

class Projects extends React.Component {
    
    render() {
        return(
            <div className="flexCenter">
             <Grid container spacing={24} className="flexRow" style= {{marginTop:'15px'}}>
                <Grid item xs={12} sm={6}>
                     <Paper className="projects">
                        <img src ={melvin} alt = "melvin" className="image"/>
                        <Typography className="flexRow" variant=" display4" style={{fontSize:"50px", color:'black'}}>Pizza Ordering System  </Typography>
                        <div className = "overlay">
                             <h1 className = "text flexCenter">
                             <br/>
                                This purpose of this project was to create a web-based pizza ordering system. 
                                It features an authentication system where chefs, deliverer, and customers can sign in and see their personal ratings, as well as give ratings of the pizzeria.
                                The project makes use of Google Maps API to find pizzerias near the user and gives the user the option to add any pizza store and was created with ReactJS and Firebase.
                                
                            <div className="flexRow">
                            <Button variant="contained" color="primary" style={{padding:'5px 5px',margin:'5px 5px', marginTop:'15px'}} href = "https://github.com/ayushyamitabh/PizzaOrderSystem">GitHub</Button>
                            <Button variant="contained" color="secondary" style={{padding:'5px 5px',margin:'5px 5px', marginTop:'15px'}} href = "https://pos-tagmhaxt.firebaseapp.com/">View</Button>
                            </div>
                         </h1>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className="projects">
                        <img src ={melvin} alt = "melvin" className="image"/>
                        <Typography className="flexRow" variant=" display4" style={{fontSize:"50px", color:'black'}}>FoodForThought </Typography>
                        <div className = "overlay">
                             <h1 className = "text flexCenter">
                             <br/>
                                This project was my team's way of creating a website like Yelp, but for pizzas only. 
                                The website implements Google Maps API to find pizzerias near you. If the pizzeria is 
                                partnered with us, then upon selection, the page will redirect to the menu page. 
                                In the menu page, the user would then be able to add items to their cart and check out. 
                                This website also implements a blacklist and a registered users function, where blacklisted users are 
                                barred from purchasing and registered users receives discounts.
                            <a href = "https://github.com/buenoluis007/Krusty_Krab_Pizza">Check it out on GitHub</a>
                         </h1>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className="projects">
                        <img src ={melvin} alt = "melvin" className="image"/>
                        <Typography className="flexRow" variant=" display4" style={{fontSize:"50px", color:'black'}}>Interactive Website </Typography>
                        <div className = "overlay">
                             <h1 className = "text flexCenter">
                             <br/>
                                This project was my team's way of creating a website like Yelp, but for pizzas only. 
                                The website implements Google Maps API to find pizzerias near you. If the pizzeria is 
                                partnered with us, then upon selection, the page will redirect to the menu page. 
                                In the menu page, the user would then be able to add items to their cart and check out. 
                                This website also implements a blacklist and a registered users function, where blacklisted users are 
                                barred from purchasing and registered users receives discounts.
                            <a href = "https://github.com/buenoluis007/Krusty_Krab_Pizza">Check it out on GitHub</a>
                         </h1>
                    </div>
                    </Paper>
                </Grid>
            </Grid>
            </div>      
        );
    }
}
export default Projects;