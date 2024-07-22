import React, { useRef } from 'react'
import Navbar from './Navbar'
import AboutUsServices from './AboutUsServices'
import Contactus from './Contactus'
import Footer from './Footer'
import img1 from '../images/about1.png'
import OurStory from './AboutUS/OurStory';
import Intro from './AboutUS/Intro';
import Blogs from './Blogs';
import WhyMl from './AboutUS/WhyMl';
import OurClients from './OurClients'
import Founders from './AboutUS/Founders';
import Layout from '../Common_Views/Layout'
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyLoad from 'react-lazy-load';

const Aboutus = () => {
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const contactUsRef = useRef(null);
    const scrollToContactUs = () => {
        contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Layout title='About us - ML Bench' description="Meet the ML Bench team!  Learn about our expertise in crafting powerful AI solutions and our passion for driving innovation. ">

            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/aboutus/" />
            </Helmet>
            <Navbar />
            <div className="about-main">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 aboutus-header">
                            <div className="row">
                                <div className="">
                                    <motion.div
                                        ref={ref}
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <h1 className="about-head my-5 ">
                                            We are your innovation and
                                            growth partner
                                        </h1>
                                        <p className=" my-5">
                                            We support the growth of startups and innovators by applying the best-fitted technologies and sharing our expertise. We strive to improve people’s lives through cutting-edge products and solutions.

                                        </p>
                                    </motion.div>
                                    <div class="button-container-1" onClick={scrollToContactUs}>

                                        <button id='work' className='view-btn' type="button" name="Hover">Lets Talk!</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 px-0">
                            <div className="">
                               
                                    <LazyLoad>
                                        <img src={img1} className="about-img" alt="About Us" loading='lazy' />
                                    </LazyLoad>
                           
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Intro />
            <Founders />
            <OurStory />
            <OurClients />
            <WhyMl />
            <AboutUsServices />
            <Blogs />
            <div ref={contactUsRef}>
                <Contactus />
            </div>
            <Footer />
        </Layout>
    )
}

export default Aboutus