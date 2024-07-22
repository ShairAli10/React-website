import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgh1 from '../images/frontimg.png';
import Navbar from './Navbar';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Contactus from './Contactus';
import Footer from './Footer';
import Services from './Home/Services';
import Approach from './Approach';
import Testimonials from './Home/Testimonials';
import Blogs from './Blogs';
import Layout from './../Common_Views/Layout';
import ContactusPopup from './ContactusPopup';
import { Helmet } from "react-helmet";
import LazyLoad from 'react-lazy-load';

const Header = () => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopUpOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopUpOpen(false);
    };

    return (
        <Layout
            title="ML Bench: AI Solutions Development Company"
            description="Your trusted AI solutions development company, crafting innovative machine learning solutions tailored to your needs. Get a free consultation!"
        >
            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/" />
            </Helmet>
            <div className="main-p">
                <Navbar />

                <div className="container-fluid main" bg={true}>
                    <div className="row">
                        <div className="col-lg-12 my-5">
                            <div className="row justify-content-center mt-3 text-center">
                                <div className="col-lg-8 text-white home-header">
                                    <h1> Your Leading AI <br /> Solutions Development Company </h1>
                                    <p>We help innovative businesses and startups to build their digital products using AI, Computer Vision, Deep Learning, Machine Learning, Web, and mobile technologies.</p>

                                    <div className="header-btns">
                                        <button className='free-btn' onClick={handleButtonClick}>Get Free Consultation</button>
                                        <Link to='/portfolio/mobileportfolio'><button className='view-btn'>View Portfolio</button></Link>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-12">
                                            <div className="my-5">
                                                <LazyLoad offset={0}>
                                                    <img className="img-head" src={imgh1} alt="AI object detection" loading='lazy' width={1240} height={445} />
                                                </LazyLoad>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Second />
            <Third />
            <Fourth />
            <Services />
            <Approach />
            <Testimonials />
            <Blogs />
            <Contactus />
            <Footer />
            {isPopUpOpen && (
                <div className="popupWrapper">
                    <ContactusPopup isOpen={isPopUpOpen} onClose={handleClosePopup} />
                </div>
            )}
        </Layout>
    );
}

export default Header;
