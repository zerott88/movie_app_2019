import React from 'react';
import PropTypes from "prop-types";

function Movie({name, imagie, rating}) {
  //var Frating_ = rating.toFixed(2);
  const util = require('util')


 
  
  return <div>
      <h2>{name}</h2>
      <h4>{util.format("%s", parseFloat(rating).toFixed(1))} / 5.0</h4>
      <img src={imagie} alt={name} />

  </div>
}


Movie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


const movieIlike = [
  {
    id:1,
    title: "추노",
    poster: "https://t1.daumcdn.net/cfile/tistory/193957174BB014D481?download",
    rate: 5.0
  },
  {
    id:2,
    title: "뿌리 깊은 나무",
    poster: "https://img2.sbs.co.kr/img/sbs_cms/PG/2016/06/02/PG38362122_w640_h360.jpg",
    rate: 4.1
  },
  {
    id:3,
    title: "육룡이 나르샤",
    poster: "http://image.chosun.com/sitedata/image/201509/22/2015092201326_0.jpg",
    rate: 2.8
  }
];




function App() {

  return (
    <div> 
      {
      movieIlike.map(dish => (  
        <Movie 
          key={dish.id} 
          name={dish.title} 
          imagie={dish.poster} 
          rating={dish.rate} />
      ))}
    </div>
  );
}

export default App;