import React, { useEffect } from 'react'
import AboutWeb from '../About/AboutWeb'
import LatestTechWeb from '../LatestTechnologies/LatestTechWeb'
import Navbar from '../Navbar'
import ToolsWeb2 from '../Tools/ToolsWeb2'
import Footer from '../Footer'
import Fade from "react-reveal";

import Blogs from './../Blogs';
import Talk from './../Talk';
import WebProcess from './../WebProcess';
import Layout from '../../Common_Views/Layout'
import {Helmet} from "react-helmet";
const Services = () => {

    


    return (
        <Layout title='Custom Web App Development Services - ML Bench ' description="ML Bench builds powerful web apps to transform your business.  Expert development, exceptional results. Get a free quote today!">
          <Helmet>
          <link rel="canonical" href="https://ml-bench.com/services/webapp" />
            </Helmet>
            <div className="main-webservices">
                <Navbar />
                <div className="container h-100">
                    
                    <Fade duration={1000}>
                        <div className="row justify-content-center align-items-center h-100 ">
                            <div className="col-lg-10 text-center zd mt-5 pt-5">
                                <h1>
                                    Web App Development
                                </h1>

                                <p >
                                    AI-powered web apps built for scale. ML Bench crafts intelligent solutions that learn and adapt to your user's needs.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>


            <AboutWeb />
            <LatestTechWeb />
            <WebProcess />
            <ToolsWeb2 />
            <Blogs />
            <Talk />
            <Footer />
        </Layout>
    )
}

export default Services