import React, { useState, useEffect } from 'react';
import scrolltop from '../../images/scrolltop.svg';
import styles from './ScrollTopButton.module.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={styles.scrollToTop}>
            {isVisible && 
                <img src={scrolltop} alt="scroll top button" onClick={scrollToTop} className={styles.button} />
            }
        </div>
    );
};

export default ScrollToTopButton;
