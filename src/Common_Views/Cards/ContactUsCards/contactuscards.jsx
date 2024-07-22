import React from 'react';
import styles from './ContactUsCards.module.css'; 

const ContactUsCard = ({ imageSrc, imageSrc1, imageSrc2, title, text, text1 }) => {
  const isEmail = /\S+@\S+\.\S+/.test(text);
  const isPhoneNumber = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(text);
  const isAddress = /\d+[\s,]+\w+[\s,]+[\w\s]+/i.test(text);

  return (
    <div className={styles['contact-us-card']}> 
      <img src={imageSrc} alt="Contact" className={styles['contact-us-card-image']} /> 
      <h4 className={styles['contact-us-card-title']}>{title}</h4> 
      {imageSrc1 && ( 
        <span className={styles['contact-us-card-text']}>
          <img src={imageSrc1} alt="Country" className={styles['country-image']} />
          {isPhoneNumber ? (
            <a href={`tel:${text}`} className={styles['contact-email-link']}>{text}</a>
          ) : (
            text
          )}
        </span> 
      )}
      {imageSrc2 && ( 
        <span className={styles['contact-us-card-text']}>
          <img src={imageSrc2} alt="Country" className={styles['country-image']} />
          {isPhoneNumber ? (
            <a href={`tel:${text1}`} className={styles['contact-email-link']}>{text1}</a>
          ) : (
            text1
          )}
        </span> 
      )}
      {!imageSrc1 && !imageSrc2 && ( 
        <span className={styles['contact-us-card-text']}>
          {isEmail ? (
            <a href={`mailto:${text}`} target="_blank" rel="noopener noreferrer" className={styles['contact-email-link']}>{text}</a>
          ) : isAddress ? (
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" className={styles['contact-email-link']}>{text}</a>
          ) : (
            text
          )}
        </span>
      )}
    </div>
  );
};

export default ContactUsCard;
