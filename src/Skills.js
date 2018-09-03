import React, { Component } from 'react';
import './Skills.css';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

class Skills extends React.Component {
    render() {
        return(
            <div className="flexCenter">       
                 <Card className="cardSize"> 
                    <CardContent className="cardTitle">
                        <Typography variant="display1" style={{color:'black'}} >Programming</Typography>
                        <hr className="divider"/>
                        
                    </CardContent>
                    <CardContent >
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block' }}  variant="outlined" label="C#"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="C#"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="C#"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="C#"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block' }}  variant="outlined" label="C#"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="C#"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="C#"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="C#"></Chip>
                    
                    
                    </CardContent>
                 </Card>
                 <Card className="cardSize"> 
                    <CardContent className="cardTitle">
                        <Typography variant="display1" style={{color:'black'}} >Programming</Typography>
                    </CardContent>
                 </Card>
            </div>
        );
    }
}
export default Skills;