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
            <div className="flexCenter" data-aos ="flip-up">
                <Card className="experience" zDepth={3}>
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h3">
                     InterSoft Associates
                    </Typography>
                    <img src={InterSoft} className="workLogo"/>
                    <CardHeader subheader={<span><strong>Software Developer Intern</strong><br />February 2018 To August 2018</span> } />
                    <Typography component="p">Developed new screens for software programs using MVVM design pattern that clients use on daily basis. Applied problem solving techniques to debug legacy systems. 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default Experience;