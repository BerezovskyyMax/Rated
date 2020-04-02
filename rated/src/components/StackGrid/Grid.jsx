import React from 'react';
import './Grid.css';
import StackGrid from 'react-stack-grid';
import {Image} from 'react-bootstrap';

const imagePaths = [
  require('./Sample Ad Images/coke.jpg'),
  require('./Sample Ad Images/giunnes.jpg'),
  require('./Sample Ad Images/green.jpg'),
  require('./Sample Ad Images/heinz.jpg'),
  require('./Sample Ad Images/kidneys.jpg'),
  require('./Sample Ad Images/mcdc.jpg'),
  require('./Sample Ad Images/pepsi.jpg'),
  require('./Sample Ad Images/snack.jpeg'),
  require('./Sample Ad Images/volvo.jpg'),
  require('./Sample Ad Images/mcDonalds.jpg'),
  require('./Sample Ad Images/coke.jpg'),
  require('./Sample Ad Images/giunnes.jpg'),
  require('./Sample Ad Images/green.jpg'),
  require('./Sample Ad Images/heinz.jpg'),
  require('./Sample Ad Images/kidneys.jpg'),
  require('./Sample Ad Images/mcdc.jpg'),
  require('./Sample Ad Images/pepsi.jpg'),
  require('./Sample Ad Images/snack.jpeg'),
  require('./Sample Ad Images/volvo.jpg'),
  require('./Sample Ad Images/mcDonalds.jpg'),
  require('./Sample Ad Images/coke.jpg'),
  require('./Sample Ad Images/giunnes.jpg'),
  require('./Sample Ad Images/green.jpg'),
  require('./Sample Ad Images/heinz.jpg'),
  require('./Sample Ad Images/kidneys.jpg'),
  require('./Sample Ad Images/mcdc.jpg'),
  require('./Sample Ad Images/pepsi.jpg'),
  require('./Sample Ad Images/snack.jpeg'),
  require('./Sample Ad Images/volvo.jpg'),
  require('./Sample Ad Images/mcDonalds.jpg'),
  require('./Sample Ad Images/coke.jpg'),
  require('./Sample Ad Images/giunnes.jpg'),
  require('./Sample Ad Images/green.jpg'),
  require('./Sample Ad Images/heinz.jpg'),
  require('./Sample Ad Images/kidneys.jpg'),
  require('./Sample Ad Images/mcdc.jpg'),
  require('./Sample Ad Images/pepsi.jpg'),
  require('./Sample Ad Images/snack.jpeg'),
  require('./Sample Ad Images/volvo.jpg'),
  require('./Sample Ad Images/mcDonalds.jpg'),
]

function InstanciateItems() {
    return(
      imagePaths.map((path, index)=>{
        return (<div className = "gridItem"  key = {"key" + index}>
          <Image classname = "imageAd" src = {path} fluid/>
        </div>)
      })) 
}

export default function Grid(amount) {
    return (
      <div className = "itemsContainer">
        <StackGrid
          columnWidth={247}>
          {InstanciateItems()}
        </StackGrid>
      </div>
    )
}
