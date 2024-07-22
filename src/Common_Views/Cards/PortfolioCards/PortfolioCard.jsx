import React from 'react';
import styles from './PortfolioCard.module.css';
import LazyLoad from 'react-lazy-load';

const PortfolioCard = ({ imageUrl, imageAlt, title, description, imagePosition, }) => {
  const imageFirst = imagePosition === 'left';

  const gradientClass = imageFirst ? styles.gradientleft : styles.gradientright;

  const words = title.split(' ');
  const firstWord = words.shift();
  const restOfTitle = words.join(' ');

  return (
    <div className={`${styles.portfoliocard} ${gradientClass}`}>
      {imageFirst ? (
        <>
          <div className={styles.portfoliocardimage}>
            <LazyLoad >
              <img src={imageUrl} alt={imageAlt} loading='lazy' width={500} height={500}/>
            </LazyLoad>
          </div>
          <div className={styles.portfoliocardcontent}>
            <h2>
              <span className='blue-tag'>{firstWord}</span> {restOfTitle}
            </h2>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.portfoliocardcontent}>
            <h2>
              <span className='blue-tag'>{firstWord}</span> {restOfTitle}
            </h2>
            <p>{description}</p>
          </div>
          <div className={styles.portfoliocardimage}>
            <LazyLoad>
              <img src={imageUrl} alt={imageAlt} loading='lazy' width={500} height={500}/>
            </LazyLoad>
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioCard;
