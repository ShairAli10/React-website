import React from 'react';
import styles from './ServiceCard.module.css';
import LazyLoad from 'react-lazy-load';

function ServiceCard({imgWidth , imgHeight,  imgSrc, imgAlt, title, description }) {
 
  const titleWords = title.split(' ');

  return (
    <>
      <div className={`${styles['service-card']}`}>
        <LazyLoad offset={0}>
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} loading='lazy'/>
        </LazyLoad>

        <h3 className={styles['card-title']}>
          {titleWords.map((word, index) => (
            <span key={index} style={{ color: index === 0 ? '#1E5BFA' : 'black' }}>{word}{' '}</span>
            
          ))}
        </h3>

        <div>
          <p className={styles['card-description']}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
