import React from 'react';
import PortfolioCard from '../../Common_Views/Cards/PortfolioCards/PortfolioCard'
import mufti from '../../images/Portfolios/MobilePortfolio/mufti.png';
import koy from '../../images/Portfolios/MobilePortfolio/koy.png';
import unified from '../../images/Portfolios/MobilePortfolio/unified.png';
import probau from '../../images/Portfolios/MobilePortfolio/Probau.png';
import coldwater from '../../images/Portfolios/MobilePortfolio/coldwater.png';
import Navbar from '../Navbar';
import Footer from '../Footer';

import { Fade } from 'react-reveal';
import ServicesHead from '../../Common_Views/Services/ServicesHead';
import Layout from '../../Common_Views/Layout';
import {Helmet} from "react-helmet";



const MobilePortfolio = () => {
    return (
        <Layout title='Mobile App Development Portfolio - ML Bench ' description="ML Bench mobile app portfolio, featuring dynamic and user-friendly applications that transform your brand. Explore solutions for both iOS and Android platforms.">
            <Helmet>
            <link rel="canonical" href="https://ml-bench.com/portfolio/mobileportfolio" />
            </Helmet>
            <Navbar />
            <Fade duration={1000}>
                    <div>
                        <ServicesHead
                            title="Mobile App Development Portfolio"
                            description="Explore our Mobile App portfolio page to witness innovative and user-centric solutions designed to elevate your mobile experience to new heights."
                            btntext='Schedule a Free Consultation'
                        />
                    </div>
                </Fade>
            <section id="partner" className =  'empower'>
                <div className="container ">
                    <div className="partner-content">

                        <div className="discover">
                            <div className="row">
                                <div className="col-lg-12">
                                    <PortfolioCard
                                       imageUrl={mufti}
                                        title="My Mufti"
                                        description="With Mufti App, you can connect with registered Muftis from all around the world and ask them any Islamic question that you may have. Our Muftis are highly qualified and experienced scholars who are ready to provide you with accurate and reliable answers to your queries. It also allows you to vote on the questions asked by other users, so you can help determine which questions are most relevant and important."
                                        imagePosition="right"


                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={koy}
                                        title="Koy App"
                                        description="Koy, an iOS app  where genuine connections come to life! Whether you're at the bookstore, breaking a sweat at the gym, enjoying the best cup of coffee at a coffee shop, soaking up the sun on vacation, or just navigating your day-to-day adventures, our application is your ticket to identifying and connecting with individuals open to engaging conversations."
                                        imagePosition="left"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={unified}
                                        title="Unified App"
                                        description="Unified TSN is an iOS and Android networking app designed specifically for university students. Main goal of this app is to provide a platform that solves the most common student problems while studying in university. With this app you can meet new students/make friends, Access to tutors who will act your home-lecturers for academics/languages/life skills and create your own business page and advertising your brand to all users."
                                        imagePosition="right"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={probau}
                                        title="ProBau App"
                                        description="ProBau offers a platform to seamlessly connect construction projects. Private users can effortlessly publish their projects, while businesses gain access to matching contracts through our Autopilot technology, which aligns keywords. Save time, expand your opportunities, and realize construction projects with ease. "
                                        imagePosition="left"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={coldwater}
                                        title="Cold Water Therapy App"
                                        description="Cold Water Therapy is an app that revolutionizes your approach to health through the ancient practice of cold hydrotherapy. With customizable timers, temperature settings, and pulse monitoring, it empowers you to track your progress and achieve your wellness goals effectively. Seamlessly synchronized with Apple Health, it provides comprehensive insights and monthly summaries to keep you on track. "
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

export default MobilePortfolio