import React from "react";
import classes from "./Card.module.css";
const Card = ({ card, handleChoice, flipped, disable }) => {
  const clickHandler = () => {
    if (!disable) {
      handleChoice(card);
    }
  };
  return (
    <div className={classes.card}>
      <div className={flipped ? classes.flipped : ""}>
        <img className={classes.front} src={card.src} alt="card front" />
        <img
          className={classes.back}
          src="/img/cover.png"
          alt="card back"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};

export default Card;
