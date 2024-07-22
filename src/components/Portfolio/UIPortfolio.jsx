import React from 'react';
import PortfolioCard from '../../Common_Views/Cards/PortfolioCards/PortfolioCard'
import img1 from '../../images/Portfolios/UI-UX/roxfit.png';
import img2 from '../../images/Portfolios/UI-UX/sokar.png';
import img3 from '../../images/Portfolios/UI-UX/changing.png';
import img4 from '../../images/Portfolios/UI-UX/unified.png';
import img5 from '../../images/Portfolios/UI-UX/parentcare.png';
import Navbar from '../Navbar';
import Footer from './../Footer';

import ServicesHead from './../../Common_Views/Services/ServicesHead';
import { Fade } from 'react-reveal';
import Layout from '../../Common_Views/Layout';
import {Helmet} from "react-helmet";

const UIPortfolio = () => {
    return (
        <Layout title='UI/UX Design Portfolio - ML Bench' description="Explore ML Bench's UI/UX designs portfolio, highlighting our focus on creating intuitive and visually stunning digital experiences.">
            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/portfolio/uiportfolio" />
            </Helmet>
            <Navbar />
            <Fade duration={1000}>
                <div>
                    <ServicesHead
                        title="UI/UX Design Portfolio "
                        description="Step into our UI/UX portfolio page to experience captivating and intuitive user interfaces crafted with meticulous attention to detail, ensuring exceptional user experiences across all platforms."
                        btntext='Schedule a Free Consultation'
                    />
                </div>
            </Fade>
            <section id="partner" className='empower'>
                <div className="container ">
                    <div className="partner-content">

                        <div className="discover">
                            <div className="row">
                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img1}
                                        imageAlt="Roxfit designed by ML Bench"
                                        title="RoxFit"
                                        description="ROXFIT revolutionizes functional fitness tracking with advanced segmentation and a customizable timer. Users access a vast library or create personalized workouts. Post MVP, ML algorithms enhance exercise detection for precise segmentation. AI-driven features offer tailored recommendations. ROXFIT celebrates milestones and fosters community engagement, striving to be more than a fitness tracker—a supportive companion on the journey to peak performance and well-being."
                                        imagePosition="right"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img2}
                                        imageAlt="Sokar designed by ML Bench"
                                        title="Sokar"
                                        description="SOKAR is an innovative mobile application aimed at transforming the management of diabetes. The core feature of the app revolves around its integration with a wearable sensor that continuously monitors blood glucose levels in real time. This sensor is designed to be non-invasive and seamlessly attaches to the user’s body, providing accurate and instant readings without the need for traditional blood sampling methods."
                                        imagePosition="left"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img3}
                                        imageAlt="Changing time designed by ML Bench"
                                        title="Changing Time"
                                        description="Changing Time is a revolutionary watchOS app designed to make diaper changes a breeze for parents and a delight for babies. With engaging games like the balloon and bubble games, it keeps little ones entertained during changing times. Each bubble pop reveals a delightful surprise animation, from balloons to fruits, ensuring giggles and smiles all around."
                                        imagePosition="right"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img4}
                                        imageAlt="Unified designed by ML Bench"
                                        title="Unified"
                                        description="Unified TSN is basically a networking app designed specifically for university students. Main goal of this app is to provide a platform that solves the most common student problems while studying in university. With this app, you can meet new students/make friends, Access to tutors who will act your home-lecturers for academics/languages/life skills and create your own business page and advertising your brand to all users."
                                        imagePosition="left"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img5}
                                        imageAlt="Parent Care designed by ML Bench"
                                        title="Parent Care"
                                        description="Parentcare is all-in-one companion from pregnancy to preschool. Empowering mothers with expert advice, personalized support, and budget management tools. Partner code pairing enables seamless involvement, allowing partners to track progress and support. From first trimester to toddlerhood, Parentcare ensures every parent feels confident and prepared for the incredible journey of raising children."
                                        imagePosition="right"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </Layout>
    )
}

export default UIPortfolio