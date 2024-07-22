import React, { useEffect } from 'react'
import Navbar_about from '../Navbar'
import img from '../../images/arrowb.png'
import Digital from '../Digital'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Graphic from '../Graphic'
// google analytics

import Blogs from '../Blogs';
import Talk from '../Talk';
import DigitalProcess from '../DigitalProcess';
import Layout from '../../Common_Views/Layout';
import AboutDigitalMarketing from '../About/AboutDigitalMarketing';
import {Helmet} from "react-helmet";

const DigitalMarekting = () => {


    return (
        <Layout title='Best Digital Marketing Services - ML Bench ' description="Reach your target audience & boost growth!  ML Bench offers comprehensive digital marketing solutions. Get a free consultation! ">
            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/services/digitalmarketing" />
            </Helmet>
            <div className="main-digitalservices" >
                <Navbar_about />
                <div className="container h-100">


                    <div className="row justify-content-center align-items-center h-100 ">
                        <div className="col-lg-12 text-center zd mt-5 pt-5">
                            <h1> Digital Marketing  </h1>
                            <p> Boost your visibility on the global web. Hire our knowledgeable digital marketers to market your company and establish connections with your target audience.</p>
                        </div>
                    </div>

                </div>
            </div>

            <AboutDigitalMarketing />
            <Digital />
            <Graphic />
            <DigitalProcess />
            <Blogs />
            <Talk />
            <Footer />
        </Layout>
    )
}

export default DigitalMarekting