import React, { Component } from 'react';
import './Experience.css';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InterSoft from './images/InterSoft.png';

class Experience extends React.Component {
    render() {
       

        return(
            <div className="flexCenter" data-aos ="fade-up">
                <Card className="experience">
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h3">
                     InterSoft Associates
                    </Typography>
                    <img src={InterSoft} className="workLogo"/>
                    <CardHeader subheader={<span><strong>Software Developer Intern</strong><br />February 2018 To August 2018</span> } />
                    <Typography component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     across all continents except Antarctica
                     </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default Experience;