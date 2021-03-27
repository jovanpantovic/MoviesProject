import React from "react";
import classes from "../index.css";
import Action from "../containers/MovieGenres/Action";
import Adventure from "../containers/MovieGenres/Adventure";
import Animation from "../containers/MovieGenres/Animation";
import Comedy from "../containers/MovieGenres/Comedy";
import Auxiliary from "../hoc/Auxiliary/Auxiliary";

const movieBuilder = () => {
  return (
    <Auxiliary>
      <div className={classes.genre}>
        <div>
          <h3>Action</h3>
          <Action />
        </div>
        <div>
          <h3>Adventure</h3>
          <Adventure />
        </div>
        <div>
          <h3>Animation</h3>
          <Animation />
        </div>
        <div>
          <h3>Comedy</h3>
          <Comedy />
        </div>
      </div>
    </Auxiliary>
  );
};

export default movieBuilder;
