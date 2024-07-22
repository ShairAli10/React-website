import React from 'react';
import styles from './Card.module.css';

const Card = ({ imageUrl, name, role }) => {
  return (
    <div className={styles.card}>
      <img className={styles.profile} src={imageUrl} alt="" />
      <div className={styles.profiletext}>
        <h3>{name}</h3>
        <p className={styles.color}>{role}</p>
      </div>
    </div>
  );
};

export default Card;
