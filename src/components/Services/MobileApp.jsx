import React from 'react'
import AboutMobileApp from '../About/AboutMobileApp'
import LatestTechnology from '../LatestTechnologies/LatestTechMobile'
import Navbar from '../Navbar'
import ToolsMobiles from '../Tools/ToolsMobiles'
import Footer from '../Footer'
import Fade from "react-reveal";

// google analytics

import AppProcess from './../AppProcess';
import Blogs from './../Blogs';
import Talk from './../Talk';
import Layout from '../../Common_Views/Layout'
import {Helmet} from "react-helmet";

const Services = () => {

    return (
        <Layout title='Best Mobile App Development Services - ML Bench' description="ML Bench builds best mobile apps for iOS & Android.  Turn your vision into reality with our expert developers. Get a free quote and see how we can help! ">
            <Helmet>
            <link rel="canonical" href="https://ml-bench.com/services/mobileapp" />
            </Helmet>
            <div className="main-mobservices">
                <Navbar />
                <div className="container h-100">
                    <Fade duration={1000}>

                        <div className="row justify-content-center align-items-center h-100 ">
                            <div className="col-lg-10 text-center mt-5 pt-5">
                                <h1>
                                    Mobile App Development
                                </h1>
                                <p>
                                    Let's build your dream app! Turn your vision into a reality with ML Bench's mobile app development services. From concept to launch, we'll guide you every step of the way.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>


            <AboutMobileApp />
            <LatestTechnology />
            <AppProcess />
            <ToolsMobiles />
            <Blogs />
            <Talk />
            <Footer />
        </Layout>
    )
}

export default Services