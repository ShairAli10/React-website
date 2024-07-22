import React from 'react';
import PortfolioCard from '../../Common_Views/Cards/PortfolioCards/PortfolioCard'
import img1 from '../../images/Portfolios/WatchOS/coldwater.png';
import img2 from '../../images/Portfolios/WatchOS/obzrve.png';
import img3 from '../../images/Portfolios/WatchOS/roxfit.png';
import img4 from '../../images/Portfolios/WatchOS/link.png';
import Navbar from '../Navbar';
import Footer from './../Footer';

import ServicesHead from './../../Common_Views/Services/ServicesHead';
import { Fade } from 'react-reveal';
import Layout from '../../Common_Views/Layout';
import {Helmet} from "react-helmet";

const WatchOsPortfolio = () => {
    return (
        <Layout title='Watch App Development Portfolio - ML Bench ' description="ML Bench watch app portfolio, latest designs & experiences for Apple Watch & beyond. We craft apps that integrate with your existing mobile ecosystem.">
            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/portfolio/watchportfolio" />
            </Helmet>
            <Navbar />
            <Fade duration={1000}>
                <div>
                    <ServicesHead
                        title="Watch App Development Portfolio"
                        description="Visit our Watch App portfolio page to encounter sleek and intuitive wearable applications engineered to seamlessly integrate into your daily lifestyle."
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
                                        imageAlt="cold water therapy watch app by ML Bench"
                                        title="Cold Water Therapy"
                                        description="Cold Water Therapy watchOS revolutionizes your approach to health through the ancient practice of cold hydrotherapy. With customizable timers, temperature settings, and pulse monitoring, it empowers you to track your progress and achieve your wellness goals effectively. Seamlessly synchronized with Apple Health, it provides comprehensive insights and monthly summaries to keep you on track. "
                                        imagePosition="right"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img2}
                                        imageAlt="obzrve watch app by ML Bench"
                                        title="Obzrve"
                                        description="Obzrve, a sophisticated watch app designed to facilitate active mindfulness. Through meticulously crafted guided exercises, users gain mastery over challenging cognitive, emotional, and behavioral patterns. Leveraging advanced tracking and analytical capabilities. Empowering individuals to cultivate resilience and equilibrium, Obzrve heralds a new era in personalized mental well-being solutions."
                                        imagePosition="left"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img3}
                                        imageAlt="roxfit watch app by ML Bench"
                                        title="Roxfit"
                                        description="ROXFIT watch app is your ultimate companion for functional fitness, offering advanced segmentation and customizable timers. Explore a vast library of workouts or craft your own personalized routines. With machine learning, exercise detection is precise, ensuring accurate segmentation. AI-driven features provide tailored recommendations."
                                        imagePosition="right"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img4}
                                        imageAlt="Employee link app by ML Bench"
                                        title="Employee Link"
                                        description="Employee Link, a straightforward approach for companies to track workday tasks and manage associated costs. It allows for the creation of tasks, assignment of different labor and billable rates, and offers detailed analytics for monitoring efficiency and profitability. This feature is built to support better financial and operational decision-making in businesses of all sizes."
                                        imagePosition="left"
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

export default WatchOsPortfolio