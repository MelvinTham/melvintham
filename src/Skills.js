import React, { Component } from 'react';
import './Skills.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class Skills extends React.Component {
    render() {
        return(
            <div className="flexCenter">       
                 <Card className="cardSize"> 
                    <CardContent className="cardTitle">
                        <Typography variant="display1" color='primary' >Programming</Typography>
                    </CardContent>

                 </Card>
                
            </div>
        );
    }
}
export default Skills;