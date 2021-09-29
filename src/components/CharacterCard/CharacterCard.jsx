import React from "react";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({ characterName, characterQuote, imageUrl }) => (
  <div className={styles.cardContainer}>
    <div className={styles.divImg}>
      <img alt={characterName} className={styles.img} src={imageUrl} />
    </div>
    <h2>{characterName}</h2>
    <h3>Quote:</h3>
    <p>{characterQuote}</p>
  </div>
);

export default CharacterCard;
