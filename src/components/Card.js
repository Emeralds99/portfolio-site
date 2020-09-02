import React from "react";

import CardInfo from "./CardInfo";

function Card(props) {
  return (
    <div
      className="d-inline-block p-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="p-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      ></img>
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subtitle={props.item.subtitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
