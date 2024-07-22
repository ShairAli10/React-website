import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Third = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section id='third' ref={ref}>
            <div className="thirddp my-5" role="img" aria-label="AI Powered">
                <div className="container ">

                    <div className="row justify-content-center ">

                        <div className="row third-head ">
                            <div className="col-md-6 ">
                                <h2 className='text-white'> Pure Strength <span className="blue-tag">AI Powered </span> Trainer</h2>

                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                    transition={{ duration: 2 }}
                                >

                                    <p className='text-white'>Pure Strength is the ultimate AI powered strength training tool.
                                        Upload videos of your barbell lifts and get form feedback, along with velocity and range of motion data for each rep. Improve your power lifting with Pure Strength.</p>


                                        <Link to = '/services/machinelearn'> <button className='explore-btn'>Explore Our Services</button></Link>

                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    )
}

export default Third