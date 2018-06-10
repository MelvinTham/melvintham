import React, { Component } from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Button} from 'reactstrap';
class Home extends Component {
  render() {
    return (
      <div data-aos ="fade-up">
        <div>
          <Typography variant="display2"> 
                Melvin Tham
          </Typography>
        </div>

        <div >
          <Paper>
          <h1>hello</h1>
          </Paper>
          <Card classname ="cardSize" data-aos ="fade-left">
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