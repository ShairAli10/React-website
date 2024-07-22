
import React from 'react';
import styles from './whyCard.module.css'; 

const WhyCard = ({ icon, title, description }) => {
  return (
    <div className={styles.whyCard}>
      <div className={styles.whyCardIcon}>
        <img src={icon} alt="Icon" />
      </div>
      <div className={styles.whyCardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyCard;
