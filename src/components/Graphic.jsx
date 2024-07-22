import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import img2 from '../images/DigitalMarketing/digi2.png'
import img3 from '../images/DigitalMarketing/digi3.png'


const Graphic = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4
    })
    return (
        <>

            <div className="container my-5 pb-5" ref={ref}>
                <div className="row my-5 justify-content-center  ">
                    <div className="col-lg-6 my-4 ">
                        <div >
                            <img src={img2} className="snd-img" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6  ">
                        <dive left>

                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: -100 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                                transition={{ duration: 2 }}
                            >
                                <h2 className=" graphic-head graphic-img "> If it's <span className="blue-tag">graphic design</span>,
                                    we are on our toes.</h2>
                                <p className="graphic-p">Our team of graphic design experts has the skills and experience to handle any project, from logos and branding to marketing materials, packaging, and web design. Additionally, we offer competitive pricing and personalized support to ensure that your graphic design experience is always smooth and hassle-free. Let us help you bring your ideas to life and make a lasting impression with high-quality graphic design.
                                </p>

                            </motion.div>
                        </dive>
                    </div>

                </div>

                {/* 2nd row */}

                <div className="row justify-content-center align-items-center my-5  ">

                    <div className="col-lg-6 col-two">
                        <dive right>

                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                transition={{ duration: 2 }}
                            >
                                <h2 className=" graphic-head "><span className="blue-tag">Social Media </span> Marketing
                                </h2>
                                <p className="graphic-p my-2">Our company specializes in social media, providing businesses and individuals with the tools and support they need to thrive online. With our expert guidance, you can craft a comprehensive social media strategy that connects you with your audience and drives engagement, leads, and sales. Our services include social media account setup and optimization, content creation, advertising, and analysis.
                                    Plus, we offer personalized support to ensure that your social media efforts align with your goals. Let us help you tap into the power of social media and achieve success. </p>
                            </motion.div>

                        </dive>
                    </div>

                    <div className="col-lg-6 col-one  text-center">

                        <div className=" my-4">
                            <img src={img3} className="snd-img" alt="" />
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Graphic