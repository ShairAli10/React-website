import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import AboutMachineLearning from '../About/AboutMachineLearning'
import Expert from '../Expert'
import Footer from '../Footer'
import MlProcess from '../MlProcess'
import Blogs from './../Blogs';
import Talk from './../Talk';
import Layout from '../../Common_Views/Layout'
import {Helmet} from "react-helmet";
const Machinelearn = () => {



    return (
        <Layout title='Innovative AI and ML Solution Services - ML Bench' description="ML Bench crafts custom AI & ML solutions to solve your toughest challenges for smarter decision-making and unparalleled innovation. Get started today! ">
            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/services/machinelearn" />
            </Helmet>
            <div className="main-machine">
                <Navbar />
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-100 ">
                        <div className="col-lg-10 text-center mt-5 pt-5">
                            <h1>
                                AI & ML solution
                            </h1>

                            <p>
                                Our AI/ML solutions empower you with actionable insights, allowing you to make informed decisions and stay ahead of the curve.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <Expert />
            <AboutMachineLearning />
            <MlProcess />
            <Blogs />
            <Talk />
            <Footer />

        </Layout>
    )
}

export default Machinelearn