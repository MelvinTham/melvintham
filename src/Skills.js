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
            <div className="flexCenter" data-aos ="">       
                 <Card className="cardSize" data-aos ="flip-up"> 
                    <CardContent className="cardTitle">
                        <Typography variant="display1" style={{color:'black'}} >Programming</Typography>
                        <hr className="divider"/>
                        
                    </CardContent>
                    <CardContent >
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block' }}  variant="outlined" label="C#"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="Java"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="C++"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="Python"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block' }}  variant="outlined"label="SQL"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="ReactJS"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="Firebase"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="HTML5"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="CSS3"></Chip>

                    </CardContent>
                 </Card>
                 <Card className="cardSize" data-aos ="fade-right"> 
                    <CardContent className="cardTitle">
                        <Typography variant="display1" style={{color:'black'}} >IDE's </Typography>
                        <hr className="divider"/>
                    </CardContent>
                    <CardContent >
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="Visual Studio Code"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="Microsoft Visual Studio"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="CLion"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="IntelliJ IDEA"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="Eclipse"></Chip>
                    </CardContent>
                 </Card>
                 <Card className="cardSize" data-aos ="fade-left"> 
                    <CardContent className="cardTitle">
                        <Typography variant="display1" style={{color:'black'}} >Editing Software </Typography>
                        <hr className="divider"/>
                    </CardContent>
                    <CardContent >
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="Adobe Lightroom"></Chip>
                    <Chip  style={{backgroundColor:'#DAA520',padding:'5px 5px',margin:'5px 5px',display: 'inline-block'}}  variant="outlined" label="Adobe XD"></Chip>
                    
                    </CardContent>
                 </Card>
            </div>
        );
    }
}
export default Skills;