import React from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import Potato from './Potato';
import PropTypes from "prop-types"

function Food({name, picture, rating}){
  
  return ( 
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture}/>
      </div>
    
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

const foodILike = [
  {
    id:1,
    name : "Kimchi",
    image :
      "http://root.inetstudy.co.kr/adminclass/uploadFile/TBPage/2158/632_1.jpg",
    rating:5
  },
  {
    id:2,
    name : "samgyeopsal",
    image :
      "http://root.inetstudy.co.kr/adminclass/uploadFile/TBPage/2158/632_2.jpg",
      rating : 4.9
  },
  {
    id:3,
    name : "Bibimbap",
    image :
      "http://root.inetstudy.co.kr/adminclass/uploadFile/TBPage/2158/632_3.jpg",
      rating : 3
  },
  {
    id:4,
    name : "Kimbap",
    image :
      "http://root.inetstudy.co.kr/adminclass/uploadFile/TBPage/2158/632_4.jpg",
      rating : 7.2
  }
]

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}></Food>
}



function App() {
  return (
  <div>
    <h1>Hello!!!</h1>
    {/* {foodILike.map(renderFood)} */}
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)} 
    {/* <Food fav="Kimchi"/> 
    <Food fav="ramen"/> 
    <Food fav="samgiopsal"/> 
    <Food fav="chukumi"/>  */}

  </div>);
}

export default App;
