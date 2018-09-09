import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import pizza from './images/Pizza.PNG';
import fft from './images/FFT.PNG';
import landing from './images/landing.PNG';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './Home.css';
import './Projects.css';

class Projects extends React.Component {
    
    render() {
        return(
            <div className="flexCenter" data-aos=''>
             <Grid container spacing={24} className="flexRow" style= {{marginTop:'15px'}}>
                <Grid item xs={12} sm={6}>
                     <Paper className="projects" data-aos='fade-up'  data-aos-anchor-placement="center-bottom">
                        <img src ={pizza} alt = "pizza" className="image"/>
                        <Typography className="flexRow " variant=" display4" style={{fontSize:"50px", color:'black',fontFamily:'Arial'}}>Weirdoughs </Typography>
                        <div className = "overlay flexCenter">
                             <p className = "text ">
                             <br/>
                                This purpose of this project was to create a web-based pizza ordering system. 
                                It makes use of Google Map's API to let users search for a pizzeria and add menu items to their cart. 
                                Uses a rating system like Yelp to determine status. 
                                Weirdoughs was built with ReactJS and Firebase.                      
                            <div className="flexRow">
                            <Button variant="contained" color="primary" style={{padding:'5px 5px',margin:'5px 5px', marginTop:'15px'}} href = "https://github.com/ayushyamitabh/PizzaOrderSystem"  target="_blank">GitHub</Button>
                            <Button variant="contained" color="secondary" style={{padding:'5px 5px',margin:'5px 5px', marginTop:'15px'}} href = "https://pos-tagmhaxt.firebaseapp.com/"  target="_blank">View</Button>
                            </div>
                         </p>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className="projects" data-aos='fade-up' data-aos-offset="500" data-aos-duration="500">
                        <img src ={fft} alt = "fft" className="image"/>
                        <Typography className="flexRow" variant=" display4" style={{fontSize:"50px", color:'black'}}>Food For Thought </Typography>
                        <div className = "overlay flexCenter">
                             <p className = "text ">
                             <br/>
                                FoodForThought is a website that allows users to find food recipes based off their limited ingredients in their refrigerators.
                                The user simply lists the ingredients they have in their refrigerator, and then it will display all of the relevant recipes based off the list.
                                FoodForThought was built with Spoonacular recipe-food-nutrition API, ReactJS, and Firebase.
                            <div className="flexRow">
                            <Button variant="contained" color="primary" style={{padding:'5px 5px',margin:'5px 5px', marginTop:'15px'}} href = "https://github.com/MelvinTham/team-b"  target="_blank">GitHub</Button>
                            </div>
                         </p>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className="projects" data-aos='fade-up' data-aos-offset="500" data-aos-duration="500">
                        <img src ={landing} alt = "pizza" className="image"/>
                        <Typography className="flexRow " variant=" display4" style={{fontSize:"50px", color:'black'}}>Interactive Resume </Typography>
                        <div className = "overlay flexCenter">
                             <p className = "text ">
                             <br/>
                               My interactive portfolio website :) 
                            <div className="flexRow">
                            <Button variant="contained" color="primary" style={{padding:'5px 5px',margin:'5px 5px', marginTop:'15px'}} href = "https://github.com/MelvinTham/melvintham"  target="_blank">GitHub</Button>
                            <Button variant="contained" color="secondary" style={{padding:'5px 5px',margin:'5px 5px', marginTop:'15px'}} href = "http://melvintham.com"  target="_blank">View</Button>
                            </div>
                         </p>
                    </div>
                    </Paper>
                </Grid>
            </Grid>
            </div>      
        );
    }
}
export default Projects;