import React from 'react';
import styles from './ProfileCards.module.css';
import linkedin from '../../../images/Founders/linkedin.svg'
import LazyLoad from 'react-lazy-load';

const ProfileCard = ({ imageSrc, imageAlt, name, description, iconSrc }) => {
    return (
        <section id={styles.parent}>
            <div className={styles.profilecard}>
                <LazyLoad offset={0}>
                    <img src={imageSrc} alt={imageAlt} className={styles.profileimage} loading='lazy' />
                </LazyLoad>
            </div>

            <div className={styles.profileinfo}>
                <div className={styles.text}>
                    <h3 className={styles.profilename}>{name}</h3>
                    <p className={styles.profiledescription}>{description}</p>
                </div>
                <div className={styles.icondiv}>
                    <a href={iconSrc} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className={styles.icon} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
