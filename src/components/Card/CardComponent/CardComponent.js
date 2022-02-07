import React from "react";
import classes from "./cardcomponent.module.css";
const CardComponent = (props) => {
  const date = new Date(props.item.first_release_date);
  const dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  //converting rating to a /10
  const rating = (props.item.rating / 100) * 10;
  return (
    <div className={classes.container}>
      <div className={classes.image}></div>
      <div className={classes.textBox}>
        <h3 className={classes.gameName}>{props.item.name}</h3>
        <div>
          <span>Release Date:</span>
          <span>{dateString}</span>
        </div>
      </div>
      <div className={classes.ratingBox}>
        <div className={classes.rating}>{Math.round(rating)}</div>
      </div>
    </div>
  );
};

export default CardComponent;
