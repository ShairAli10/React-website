import React from 'react'
import img1 from '../../images/m1.png'
import img2 from '../../images/m2.png'
import img3 from '../../images/m3.png'
import img4 from '../../images/m4.png'
import img5 from '../../images/m5.png'
import img6 from '../../images/m6.png'
import Slide from "react-reveal";
import RealitySection from './../../Common_Views/RealitySection';

const AboutUIUX = () => {
    return (
        <>

            <div className="mainab2 my-5">
                <h2 className="head-ab2 text-center"> What <span className="blue-tag">We</span>  Offer?</h2>
                <p className="snd-para text-center">Every business needs to have a strong online presence in the modern digital world. Still, it could be challenging to keep up with the rapidly evolving field of digital marketing. Here's where we get involved. We provide a wide range of digital marketing services to help you accomplish the goals of your company. </p>
                <Slide up duration={1300}>

                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4 my-5 boxes-about">


                                <img src={img1} alt="" />



                                <h3 className="my-4"> <span className="blue-tag">UI/UX</span>  Consulting
                                </h3>
                                <p className="snd-para">
                                Do you need strategic advice on optimizing your client's experience? Our knowledgeable consultants gather feedback from users, assess usability, and make practical suggestions to improve the user experience with your product.
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img2} alt="" />

                                <h3 className="my-4"> <span className="blue-tag">Web App</span>  UI/UX Design
                                </h3>
                                <p className="snd-para">
                                Our team creates user interfaces for web apps that are easy to use, effective, and adaptable to many screen sizes and devices ensuring a seamless and engaging experience for your users. </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img3} alt="" />

                                <h3 className="my-4"><span className="blue-tag">Mobile App</span>  UI/UX Design:
                                </h3>
                                <p className="snd-para">
                                We create mobile app user interfaces that are aesthetically pleasing, simple to use, and ideal for engagement while on the go. Optimize for iOS or Android, prioritize simplicity, and create delightful interactions
                                </p>
                            </div>
                        </div>

                        {/* row 2 */}


                        <div className="row my-1">
                            <div className="col-md-4 my-5 boxes-about">
                                <img src={img4} alt="" />

                                <h3 className=" my-4">  UI/UX <span className="blue-tag">Portfolio</span>  Design
                                </h3>
                                <p className="snd-para">
                                Let our professionals help you showcase your design abilities with a professional and eye-catching UI/UX portfolio that effectively highlights your design skills and experience.</p>
                            </div>

                        </div>

                        <div className="col-md-4"></div>

                        <div className="col-md-4"></div>
                    </div>

                </Slide>

            </div>
              
              <RealitySection />
        </>
    )
}

export default AboutUIUX