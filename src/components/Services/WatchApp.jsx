import React from 'react'
import Layout from '../../Common_Views/Layout'
import ServicesHead from '../../Common_Views/Services/ServicesHead'
import { Fade } from 'react-reveal'
import Navbar from './../Navbar';
import Footer from './../Footer';
import Blogs from './../Blogs';
import Talk from './../Talk';
import WatchappProcess from './../WatchappProcess';
import ToolsWatchApp from './../Tools/ToolsWatchApp';
import AboutWatchApp from './../About/AboutWatchApp';
import {Helmet} from "react-helmet";
const WatchApp = () => {
    return (

        <Layout title='Watch App Development Solutions - ML Bench' description='Extend your reach to wearables!  ML Bench develops innovative watch apps for Apple Watch. Get a free consultation! Elevate user engagement & functionality. '>
            <Helmet>
            <link rel="canonical" href="https://ml-bench.com/services/watchapp" />
            </Helmet>
            <div className="main-watchservices">
                <Navbar />
                <div className="container h-100">
                    <Fade duration={1000}>

                        <div className="row justify-content-center align-items-center h-100 ">
                            <div className="col-lg-10 text-center mt-5 pt-5">
                                <h1>
                                    Watch App Development
                                </h1>
                                <p>
                                    Reach users on their wrists. Extend your mobile app with a powerful watch companion.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            <AboutWatchApp />
            <WatchappProcess />
            <ToolsWatchApp />
            <Blogs />
            <Talk />
            <Footer />
        </Layout>
    )

}

export default WatchApp