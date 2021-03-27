import React, { Component } from "react";

import Movie from "../Movie/Movie";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import MovieBuilder from '../../containers/MovieBuilder';

class Arrows extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      cursor: 0,
      result: [],
    };
  }

  handleKeyDown(e) {
    const { cursor, result } = this.state;
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 39 && cursor > 0) {
      this.setState((prevState) => ({
        cursor: prevState.cursor - 1,
      }));
    } else if (e.keyCode === 37 && cursor < result.length - 1) {
      this.setState((prevState) => ({
        cursor: prevState.cursor + 1,
      }));
    } else if (e.keyCode === 38 && cursor < result.length - 1) {
      this.setState((prevState) => ({
        cursor: prevState.cursor - 6,
      }));
    } else if (e.keyCode === 40 && cursor < result.length - 1) {
      this.setState((prevState) => ({
        cursor: prevState.cursor + 6,
      }));
      //38 gore 40 dole
    } //39 desno 37 levo
  }
  render() {
    const { cursor } = this.state;

    return (
      <Auxiliary>
        <MovieBuilder onKeyDown={this.handleKeyDown}>
       {this.state.result.map((item, i) => (
          <Movie key={item.id} className={cursor === i ? "movieInfo" : null}>
          </Movie>
       ))}
        </MovieBuilder>
      </Auxiliary>
    );
  }
}
//<Input onKeyDown={this.handleKeyDown} /> iznad Movie taga

export default Arrows;
