import React, { useState } from 'react';
import styles from './RealitySection.module.css';
import ContactusPopup from '../components/ContactusPopup'; 

const RealitySection = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopUpOpen(false); 
  };

  return (
    <>
      <section id="reality">
        <div className={styles.realitycontainer}>
          <div className={styles.realitycontent}>
            <h3>Transform Your Vision into Reality</h3>
            <button onClick={handleButtonClick} className={styles.realitybtn}>
              Start Your Project Today
            </button>
          </div>
        </div>

        {/* Conditionally render the popup with a backdrop */}
        {isPopUpOpen && (
          <div className={styles.popupWrapper}>
            <ContactusPopup isOpen={isPopUpOpen} onClose={handleClosePopup} />
          </div>
        )}
      </section>
      </> 
  );
};

export default RealitySection;
