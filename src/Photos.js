import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import * as firebase from 'firebase';
import  './Photos.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
    }
   
    console.log(this.state.items)
}
 
  
  componentDidMount() {
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
            <div className="flexCenter photos" >
            <GridList style={{flexWrap: 'nowrap',marginTop:"20px"}} imgFullHeight imgFullWidth rows={1} cols={6} >
              {
              this.state.items.map((data)=>{
                  return(
                    <GridListTile style={{width:'100%',height:'auto'}}>
                      <img  src={data.url} alt="hello" />
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