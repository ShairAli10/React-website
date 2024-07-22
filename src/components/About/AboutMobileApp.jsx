import React from 'react'
import img1 from '../../images/ServicesPages/MobileApp/offer1.svg'
import img2 from '../../images/ServicesPages/MobileApp/offer2.svg'
import img3 from '../../images/ServicesPages/MobileApp/offer3.svg'
import img4 from '../../images/ServicesPages/MobileApp/offer4.svg'
import img5 from '../../images/ServicesPages/MobileApp/offer5.svg'
import Slide from "react-reveal";
import RealitySection from './../../Common_Views/RealitySection';

const AboutMobileApp = () => {
    return (
        <>

            <div className="mainab2 my-5">
                <h2 className="text-center">  What <span className="blue-tag">We</span>  Offer?</h2>
                <p className="text-center service-p">At ML Bench, we understand that mobile app development is a collaborative journey. We don't just develop native apps for iOS and Android, we specialize in crafting bespoke mobile applications tailored to your specific needs. </p>
                <Slide up duration={1300}>

                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4 my-5 boxes-about">

                                <img src={img1} alt="" />

                                <h3 className="my-3"> <span className="blue-tag">IOS</span>  App Development
                                </h3>
                                <p className="snd-para">
                                Using modern frameworks like SwiftUI and the latest and most recent XCode tools, we create native, high-performing applications that blend in perfectly with the iOS ecosystem. We specialize in creating engaging apps that grab your audience and promote company growth, from user-friendly interfaces to comprehensive functionality.
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img2} alt="" />

                                <h3 className="my-3"> <span className="blue-tag">Custom</span>  Mobile App Development
                                </h3>
                                <p className="snd-para">
                                We offer custom mobile app development services that transform your unique concepts into functional applications. Our team creates unique mobile applications that will set your company apart from competitors using a range of technologies, frameworks, and procedures.</p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img3} alt="" />

                                <h3 className="my-3"> <span className="blue-tag">Andriod</span>  App Development
                                </h3>
                                <p className="snd-para">
                                We design and create Android apps that are suited for several kinds of devices and screen sizes using technologies like Kotlin and Android Studio. Whether developing native or cross-platform apps, our team makes sure your app is recognizable in the competitive Android market, delivering exceptional performance and user satisfaction.
                                </p>
                            </div>
                        </div>

                        {/* row 2 */}


                        <div className="row justify-content-center my-1">
                            <div className="col-md-4 my-5 boxes-about">
                                <img src={img4} alt="" />

                                <h3 className=" my-3"> Mobile App <span className="blue-tag">QA</span>   & Testing
                                </h3>
                                <p className="snd-para">
                                Our professional team of quality assurance experts uses a thorough testing methodology that covers the functional, performance, security, and usability elements of your mobile application. We carefully evaluate your app across a wide range of devices and automated testing techniques, like as Appium, XCTest, and Espresso, in order to provide a perfect user experience and reduce post-launch problems.</p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img5} alt="" />

                                <h3 className=" my-3"><span className="blue-tag">App</span>  Integration
                                </h3>
                                <p className="snd-para">
                                    Our app integration services provide efficient interaction between your mobile application and external APIs and services, as well as your backend infrastructure. We use industry-standard protocols and approaches when connecting payment gateways, social media sites, and IOT devices to streamline data flow and enhance user's experience.
                                </p>
                            </div>

                            <div className="col-lg-4"></div>
                        </div>
                    </div>

                </Slide>

            

            </div>
            <RealitySection />
        </>
    )
}

export default AboutMobileApp