import React from 'react';
import styles from './ServicesHead.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ServicesHead = ({ title, description, backgroundImageUrl, btntext }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <div className={styles.mainServices} style={backgroundStyle}>
      <div className="container">
        <div className={styles.mobileHeader}>
          <h1>{title}</h1>
          <p>{description}</p>
          {btntext && (
            <Link to = '/contact'><button className={styles.schedulebtn}>{btntext}</button></Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesHead;
