import React from "react";
import CardComponent from "./CardComponent/CardComponent";

const Card = (props) => {
  return (
    <div>
      {props.games.map((item) => {
        return <CardComponent key={item.id} item={{ ...item }} />;
      })}
    </div>
  );
};

export default Card;
