import React, { Component } from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

 import Button from '@material-ui/core/Button';
 import Paper from '@material-ui/core/Paper';
 import Typography from '@material-ui/core/Typography';
class Home extends Component {

  
  render() {
    
    return (
      
      
      <div>
        <div>
          
          <Typography variant="display2"> 
                Melvin Tham
              </Typography>
          
      
          <Card>
            <CardContent>
          <Typography color="textSecondary">
            Test Test
          </Typography>
          </CardContent>
          </Card>
      

        </div>
      </div>
     
    );
  }
}

export default Home;