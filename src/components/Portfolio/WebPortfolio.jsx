import React from 'react';
import PortfolioCard from '../../Common_Views/Cards/PortfolioCards/PortfolioCard'
import campaign from '../../images/Portfolios/WebPortfolio/campaign.png'
import silicon from '../../images/Portfolios/WebPortfolio/silicon.png'
import auction from '../../images/Portfolios/WebPortfolio/auction.png'
import mufti from '../../images/Portfolios/WebPortfolio/mufti.png'
import grental from '../../images/Portfolios/WebPortfolio/grental.png'
import Navbar from '../Navbar';
import Footer from './../Footer';
import { Fade } from 'react-reveal';
import ServicesHead from '../../Common_Views/Services/ServicesHead';
import Layout from '../../Common_Views/Layout';
import {Helmet} from "react-helmet";

const WebPortfolio = () => {
    return (
        <Layout title = 'Web App Development Portfolio - ML Bench' description=" Explore our web app development portfolio showcasing innovative solutions that transformed businesses. From dynamic user interfaces to seamless functionality. ">
          <Helmet>
          <link rel="canonical" href="https://ml-bench.com/portfolio/webportfolio" />
            </Helmet>
          <Navbar />
          <Fade duration={1000}>
                    <div>
                        <ServicesHead
                            title="Web App Development Portfolio "
                            description="Dive into our Web App portfolio page to discover dynamic and scalable web applications crafted with cutting-edge technologies to meet your business needs effectively."
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
                                    imageUrl={campaign}
                                    imageAlt="Compaign box by ML Bench"
                                    title="Compaign Box "
                                    description="Get Predefined Templates For Your Campaigns with CompaignBox. The purpose of this web app is to provide users with a tool where they can enter their details into the form and submit. After that they can see the predefined template where the info will fit. This will make tasks easy for the candidate who wants to conduct the election and make a post for social media, Campaign Sign and Postcard. Users can download these media files in different formats for official use."
                                    imagePosition="right"
                                />
                            </div>

                            <div className="col-lg-12">
                                <PortfolioCard
                                    imageUrl={silicon}
                                    imageAlt="silicon Anomaly by ML Bench"
                                    title="Silicon Anomaly"
                                    description="Discover a new vision of detection with Silicon Anomaly. Explore our Detection Solutions: with our AI Based web app now you can detect the vehicle number plate, Leverage image analysis or rapid testing kits to detect malaria, Identify and track firearms in various environments and Detect and analyze fight incidents quickly and rapidly.  "
                                    imagePosition="left"
                                />
                            </div>

                            <div className="col-lg-12">
                                <PortfolioCard
                                    imageUrl={auction}
                                    imageAlt="auction by ML Bench"
                                    title="Auction"
                                    description="Auction, your premier online auction destination! Dive into a world of endless possibilities, where treasures await discovery and bidding wars ignite excitement. Explore a vast array of items, from rare collectibles to everyday essentials, all up for grabs at competitive prices. With our intuitive platform and secure transactions, buying and selling has never been more convenient. "
                                    imagePosition="right"
                                />
                            </div>

                            <div className="col-lg-12">
                                <PortfolioCard
                                    imageUrl={mufti}
                                    imageAlt="MY Mufti web by ML Bench"
                                    title="My Mufti "
                                    description="With Mufti Web App, you can view our Muftis from all around the world and ask them any Islamic question that you may have. Our Muftis are highly qualified and experienced scholars who are ready to provide you with accurate and reliable answers to your queries. It also allows you to vote on the questions asked by other users, so you can help determine which questions are most relevant and important."
                                    imagePosition="left"
                                />
                            </div>

                            <div className="col-lg-12">
                                <PortfolioCard
                                    imageUrl={grental}
                                    imageAlt="GRental by ML Bench"
                                    title="GRental"
                                    description="Discover convenience at its best with GRental. From construction to events, find top-quality equipment for rent effortlessly. Our user-friendly interface and detailed descriptions simplify your search. Trust us for seamless rentals, ensuring you get what you need, when you need it. Whether DIY or professional, make your event a success with GRental. "
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

export default WebPortfolio