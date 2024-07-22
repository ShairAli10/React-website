import React from 'react';
import styles from './PartnerCard.module.css';

const PartnerCard = ({ imageUrl, title, description, imagePosition }) => {
  const imageFirst = imagePosition === 'left';

  const gradientClass = imageFirst ? styles.gradientleft : styles.gradientright;

  const words = title.split(' ');
  const firstWord = words.shift();
  const restOfTitle = words.join(' ');

  return (
    <div className={`${styles.partnercard} ${gradientClass}`}>
      {imageFirst && (
        <div className={styles.partnercardimage}>
          <img src={imageUrl} alt="PartnerCard" />
        </div>
      )}
      <div className={styles.partnercardcontent}>
        <h1>
          <span className= 'blue-tag'>{firstWord}</span> {restOfTitle}
        </h1>
        <p>{description}</p>
      </div>
      {!imageFirst && (
        <div className={styles.partnercardimage}>
          <img src={imageUrl} alt="PartnerCard" />
        </div>
      )}
    </div>
  );
};

export default PartnerCard;
