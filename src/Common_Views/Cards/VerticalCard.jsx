import React from 'react';
import styles from './VerticalCard.module.css';

function VerticalCard({ imgSrc,arrowno, imgAlt, title, firstParagraph, lastParagraph }) {
    return (
        <div className={styles['vertical-card']}>
            <img src={imgSrc} alt={imgAlt} loading='lazy'/>

            <object data={arrowno} ></object>

            <div>
                <p>{firstParagraph}</p>
                <h3>{title}</h3>
                <p>{lastParagraph}</p>
            </div>
        </div>
    );
}

export default VerticalCard;
