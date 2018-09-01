import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import melvin from './images/Melvin.JPG';
import * as firebase from 'firebase';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData:'',
    }
}

  
   
  
  componentDidMount() {
    const fbimages = firebase.storage().ref('images/');
    const image = fbimages.child('Doge2.jpg');
    image.getDownloadURL().then((url)=>{
      this.setState({
        imageData:url,
      })
    })
  console.log(this.state.imageData);
  }


    render() {
          const tilesData = [
            {
              img: 'https://images-na.ssl-images-amazon.com/images/I/811fGdwqf%2BL._SX355_.jpg',
              title: 'Breakfast',
              author: 'jill111',
            },
            
          ];

        return(
            <div >
            <GridList
              style={{flexWrap: 'nowrap'}} cols={2.5} data-aos ="fade-up">
              {tilesData.map((tile) => (
                <GridListTile
                  key={tile.img}>
                  <img src={tile.img} />
                </GridListTile>
              ))}
            </GridList>
            <img src = {this.state.imageData}></img>
            </div>
        );
    }
}
export default Contact;