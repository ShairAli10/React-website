import React from 'react'
import img1 from '../images/car.png'
import img2 from '../images/fourth2.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import  LazyLoad  from 'react-lazy-load';


const Fourth = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (
        <section id='fourth' ref={ref}>
            <div className="container ">

                <div className="row justify-content-center my-5 align-items-center ">
                    <div className="col-lg-6 ">

                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2>  Machine Learning <span className="blue-tag"> Object Counter </span></h2>
                            <p className='my-5' >Machine Learning Object Counter is equipped with state-of-the-art Deep learning networks (YOLO3) that automatically identifies and counts specific objects from videos and images. MLBench is an expert power, a leading AI vision platform for enterprises to develop deep learning based object-tracking applications and deploy them to production with one end-to-end solution.</p>
                        </motion.div>


                    </div>

                    <div className="col-lg-6 my-4 ">
                        <div className="">
                            <LazyLoad offset={0}>
                                <img src={img1} className="snd-img" alt="ML object counter" loading='lazy' width={556} height={290} />
                            </LazyLoad>
                        </div>
                    </div>

                </div>

                {/* 2nd row */}
                <div className="row my-5 justify-content-center">


                    <div className="col-lg-6 col-one ">
                        <div className=" my-4">
                            <LazyLoad offset={0}>
                                <img src={img2} className="snd-img" alt="AI vision image sticher" loading='lazy' width="556px" height="290px" />
                            </LazyLoad>
                        </div>

                    </div>


                    <div className="col-lg-6 col-two">

                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2> Vision Image  <span className="blue-tag">stitcher</span></h2>
                            <p className='my-5'>Vision Image Stitcher is a GUI base image stitching solution that can stitch images with overlapping fields of view. Blend your images with Vision Image Stitcher to make a panoramic view. </p>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Fourth