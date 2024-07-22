import React from 'react';
import PortfolioCard from '../../Common_Views/Cards/PortfolioCards/PortfolioCard'
import img1 from '../../images/Portfolios/MachineLearning/rice.png';
import img2 from '../../images/Portfolios/MachineLearning/strength.png';
import img3 from '../../images/Portfolios/MachineLearning/malaria.png';
import img4 from '../../images/Portfolios/MachineLearning/research.png';
import Navbar from '../Navbar';
import Footer from './../Footer';
import ServicesHead from './../../Common_Views/Services/ServicesHead';
import { Fade } from 'react-reveal';
import Layout from '../../Common_Views/Layout';
import {Helmet} from "react-helmet";

const MLPortfolio = () => {
    return (
        <Layout title='Advance AI & ML Solutions Portfolio - ML Bench' description="Explore ML Bench's AI & ML portfolio, a testament to our expertise in crafting intelligent solutions. From automating tasks to generating insightful data. ">
            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/portfolio/aiportfolio" />
            </Helmet>
            <Navbar />
            <Fade duration={1000}>
                <div>
                    <ServicesHead
                        title="AI & ML Solutions Portfolio "
                        description="Our AI/ML portfolio page to uncover transformative artificial intelligence and machine learning solutions engineered to drive data-driven insights and enhance business performance."
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
                                        imageAlt="rice classification ML Bench"
                                        title="Rice Classification"
                                        description="Introducing our mobile app for rice grain classification: a fusion of computer vision and machine learning. Developed to streamline manual inspection, it empowers users to classify rice grains instantly. Leveraging a robust dataset from key markets like Pakistan's largest rice market, our app employs advanced deep learning models like ResNet50v2 and VGG19 for superior accuracy. "
                                        imagePosition="right"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img2}
                                        imageAlt="AI Powered Trainer ML Bench"
                                        title="Pure Strength"
                                        description="Introducing PureStrength, the premier AI-powered personal trainer designed to help you perfect your form, increase your strength, and transform your body! Struggling with form during workouts? PureStrength is here to change that. Our cutting-edge AI analyzes your exercise videos and provides instant feedback on your squat, bench press, and deadlift performance. Unlock your potential and become a stronger, bigger, and healthier version of yourself!"
                                        imagePosition="left"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img3}
                                        imageAlt="Malaria detection by ML Bench"
                                        title="Malaria Detection "
                                        description="Our App addresses the challenge of timely and accurate diagnosis in regions with limited access to skilled medical professionals. By utilizing deep learning-based algorithms, it automatically detects and localizes malaria parasites in stained blood slides, providing rapid results. The app streamlines the diagnostic process, reducing the time required for manual examination from minutes to seconds. our app serves as a valuable tool for both investigation and educational purposes in healthcare settings"
                                        imagePosition="right"
                                    />
                                </div>

                                <div className="col-lg-12">
                                    <PortfolioCard
                                        imageUrl={img4}
                                        imageAlt="Malaria detection research paper"
                                        title="Malaria Detection Research Paper"
                                        description="This research paper is based on malaria detection that how  we are utilizing deep learning-based algorithms to automatically detect and localizes malaria parasites in stained blood slides, providing rapid results.The challenge of timely and accurate diagnosis in regions with limited access to skilled medical professionals. "
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

export default MLPortfolio