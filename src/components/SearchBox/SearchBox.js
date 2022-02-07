import React, { useState } from "react";
import classes from "./searchbox.module.css";
const SearchBox = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Filter Results</h3>
      <label>Name(Contains)</label>
      <input
        onChange={(e) => {
          props.sortByName(e.target.value);
        }}
        placeholder="Text String"
      />
      <label>Orderby</label>
      <select onChange={props.sortBySeclect}>
        <option value="ratings">ratings</option>
        <option value="date">date</option>
      </select>
      <button onClick={props.clear}>clear</button>
    </div>
  );
};

export default SearchBox;
