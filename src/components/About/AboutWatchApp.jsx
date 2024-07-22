import React from 'react'
import img1 from '../../images/ServicesPages/WatchApp/offer1.svg'
import img2 from '../../images/ServicesPages/WatchApp/offer2.svg'
import Slide from "react-reveal";
import RealitySection from './../../Common_Views/RealitySection';

const AboutWatchApp = () => {
    return (
        <>

            <div className="mainab2 my-5">
                <h2 className="head-ab2 text-center">  What <span className="blue-tag">We</span>  Offer?</h2>
                <p className="snd-para text-center">We provide complete web app development services suited to your specific needs. Our professional developers use the latest tools, technologies, and frameworks to produce high-quality, scalable web apps.</p>
                <Slide up duration={1300}>

                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4 boxes-about">


                                <img src={img1} alt="" />


                                <h3 className="my-4"> <span className="blue-tag">Custom</span>  Watch App Development
                                </h3>
                                <p className="snd-para">
                                    Our team builds bespoke watch apps tailored to your specific needs and functionalities. We focus on intuitive design, clear information hierarchy, and smooth interaction for a delightful user experience.

                                </p>
                            </div>


                            <div className="col-md-4 boxes-about ">
                                <img src={img2} alt="" />

                                <h3 className="my-4"> Watch App Development with <span className="blue-tag"> ML</span> and <span className="blue-tag">Health Kit</span>  Support
                                </h3>
                                <p className="snd-para">
                                    Take your watch app to the next level by integrating Machine Learning for personalization and HealthKit (for Apple Watch) to unlock advanced health and wellness features.
                                </p>
                            </div>
                        </div>
                    </div>

                </Slide>

            </div>

            <RealitySection />

        </>
    )
}

export default AboutWatchApp