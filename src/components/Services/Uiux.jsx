import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Worksimg from '../Worksimg'
import ToolsUI from '../Tools/ToolsUI'
import Footer from '../Footer'
import UIProcess from '../UIProcess';
// google analytics

import Layout from '../../Common_Views/Layout'
import Blogs from './../Blogs';
import Talk from './../Talk';
import AboutUIUX from './../About/AboutUIUX';
import {Helmet} from "react-helmet";




const Uiux = () => {
    

    return (
        <Layout title='Latest & User-friendly UI UX Design Services - ML Bench ' description="Create a user experience that wows!  ML Bench delivers stunning & intuitive UI/UX designs for any platform.  Get a free quote!">
            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/services/uiux/" />
            </Helmet>
            <Navbar />
            <div className="main-uiux ">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-100 ">
                        <div className="col-lg-8 text-center zd mt-5 pt-5">

                            <h1> UI/UX Design </h1>
                            <p>Collaborate with ML Bench to develop user experiences that increase conversions, foster engagement, and make an impact.</p>


                        </div>
                    </div>

                </div>
            </div>

            <AboutUIUX />
            <Worksimg />
            <UIProcess />
            <ToolsUI />
            <Blogs />
            <Talk />
            <Footer />
        </Layout>
    )
}

export default Uiux