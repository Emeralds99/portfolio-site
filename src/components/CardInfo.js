import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="p-card-info" style={style}>
      <p classname="p-card-title">{props.title}</p>
      <p classname="p-card-subtitle">{props.subtitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        view
      </a>
    </animated.div>
  );
}

export default CardInfo;
