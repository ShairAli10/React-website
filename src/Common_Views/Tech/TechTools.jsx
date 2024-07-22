import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './TechTools.module.css';

const TechTools = ({ data }) => {
  return (
    <div className={styles.tech}>
      <div className="container">
        <div className={styles.techContent}>
          <div className={styles.techHeader}>
            <h1> <span className='blue-tag'>Technologies</span> & Frameworks</h1>
          </div>
          <div className="row">
            {data.map((service, index) => (
              <div className="col-md-3" key={index}>
                <h1 className={styles.techUlHead}>{service.name}</h1>
                <div className={styles.techUl}>
                  <ul>
                    {service.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TechTools.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};

export default TechTools;
