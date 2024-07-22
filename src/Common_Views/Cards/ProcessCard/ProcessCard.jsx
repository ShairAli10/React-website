import React from 'react';
import styles from './ProcessCard.module.css';



function ProcessCard({ imgSrc, arrowno,  imgAlt, title, firstParagraph, lastParagraph }) {
    return (
        <div className={styles['process-card']}>

            <img src={imgSrc} alt={imgAlt} />

           
            <object data={arrowno}  />
   
            <div>
                <p>{firstParagraph}</p>
                <h3>{title}</h3>
                <p>{lastParagraph}</p>
            </div>
        </div>
    );
}

export default ProcessCard;
