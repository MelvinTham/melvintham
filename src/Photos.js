import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import melvin from './images/Melvin.JPG';
import * as firebase from 'firebase';
import  './Photos.css';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
    }
    console.log(this.state.imageData);
    console.log(this.state.items)
}
 
  
  componentDidMount() {
    

    // firebase.database().ref().child('imageURL/').once('value').then((snap)=>{
    //   this.setState({
    //     imageData: snap.val().image,
    //   })
    // })
    
    const itemsRef = firebase.database().ref('imageURL');
    itemsRef.on('value',(snap)=>{
      let items = snap.val();
      let newState =[];
      for(let item in items){
        newState.push({
          url: items[item].image
        });
      }
      this.setState({
        items:newState,
      })
    })
  console.log(this.state.items)
  }


    render() {
          
        return(
            <div className="flexCenter">
            <GridList style={{flexWrap: 'nowrap'}} imgFullHeight imgFullWidth rows={1} cols={5} >
              {
              this.state.items.map((data)=>{
                  return(
                    <GridListTile >
                      <img className="hover01" src={data.url} alt="hello" />
                    </GridListTile>
                  );
                })
              }
            </GridList>
          
            </div>
        );
    }
}
export default Contact;