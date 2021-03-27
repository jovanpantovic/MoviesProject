import React, { useState } from "react";
import classes from "../../index.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
//import Arrows from '../../components/UI/Arrows';

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = ({ title, overview, vote_averages, poster_path }) => (
  <Auxiliary>
    <div className={classes.movie} onClick={()=> {alert(overview)}}>
    <img src={IMG_API + poster_path} />
    <div className={classes.movieInfo}>{title}</div>
    </div>
  </Auxiliary>

);
  
export default Movie;
