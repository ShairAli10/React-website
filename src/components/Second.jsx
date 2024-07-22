import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ml_img1 from '../images/ML/5.png';
import img2 from '../images/realestate.png';
import LazyLoad from 'react-lazy-load';

const Second = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <section id='machinelearning' ref={ref}>
      <div className="container">
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-lg-6 col-xl">
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <h2>Machine Learning <br /> <span className="blue-tag">Deep Malaria App</span></h2>
              <p className='my-5'>Deep Malaria App is a Computer Vision and Deep learning based solution for lab technicians, to assist them in their daily malaria diagnostic test. Make your screening process faster, more consistent, and less dependent on human expertise.</p>
            </motion.div>
          </div>
          <div className="col-lg-6 col-one">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 2 }}
            >
              <div className="cent my-4">
                <LazyLoad offset={0}>
                  <img src={ml_img1} className="snd-img1" alt="ML deep malaria app" loading='lazy' />
                </LazyLoad>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Second row */}
        <div className="row justify-content-center my-5 align-items-center">
          <div className="col-lg-6 col-one">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 2 }}
            >
              <div className="my-4">
                <LazyLoad offset={0}>
                  <img src={img2} alt="ML rice classifier" className='snd-img' loading='lazy' width={558} height={250} />
                </LazyLoad>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 col-two">
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <h2>ML Rice <span className="blue-tag">Classifier</span></h2>
              <p className='my-5'>MI Rice Classifier is an AI based solution that makes mobile devices more intelligent. Capture the image of rice grains and it will predict the genus and quality of rice. Replace the hand-operated task of rice classification in a few seconds with high accuracy.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second;
