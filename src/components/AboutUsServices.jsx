import React from 'react'
import img1 from '../images/what1.png'
import img2 from '../images/what2.png'
import img3 from '../images/what3.png'
import img4 from '../images/what4.png'
import img5 from '../images/what5.png'
import img6 from '../images/what6.png'
import Slide from "react-reveal";

const AboutUsServices = () => {
    return (
        <>

            <div className="mainab2 my-5">
                <h2 className="head-ab2 text-center">  What  <span className="blue-tag"> we </span>do?</h2>
                <p className="snd-para text-center">We provide the best Software solutions under one roof. </p>
                <Slide up duration={1300}>

                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4 my-5 boxes-about">


                                <img src={img1} alt="" />

                                <h3 className="my-4"> Custom Software Development
                                </h3>
                                <p className="snd-para">
                                Need a solution as exceptional as your business? We plan and develop custom software to your specific difficulties and objectives. 
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img className='my-1' src={img2} alt="" />

                                <h3 className="my-4"> Web App Development
                                </h3>
                                <p className="snd-para">
                                Our expertise lies in designing scalable web applications that consistent user experiences and drive business growth, utilizing the most latest technologies and industry best practices.</p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img className='my-1' src={img3} alt="" />

                                <h3 className="my-4"> Watch App Development
                                </h3>
                                <p className="snd-para">
                                Our expertise in watch app development, we create intuitive and functional applications for wearable devices, upgrading user experience and availability on-the-go. 
                                </p>
                            </div>
                        </div>

                        {/* row 2 */}


                        <div className="row justify-content-center my-1">
                            <div className="col-md-4 my-5 boxes-about">
                                <img  src={img4} alt=""  />

                                <h3 className=" my-4"> Digital Marketing
                                </h3>
                                <p className="snd-para">
                                An extensive range of technologies, including SEO,SMM, PPC, and content marketing, to help you reach your target audience, drive traffic, and expand transformations.</p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img className='my-1'  src={img5} alt="" />

                                <h3 style={{margin: '2.5rem 0 1rem 0'}}> Mobile App Development
                                </h3>
                                <p className="snd-para">
                                With our expertise in mobile app development, we transform your ideas into highlight-rich applications that engage users and convey tangible results, across iOS and Android platforms. 
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img  src={img6} alt=""  />

                                <h3 className="my-4"> AI/ML solutions
                                </h3>
                                <p className="snd-para">
                                We provide advanced AI artificial intelligence, ML machine learning, DL deep learning, CV  computer vision solutions custom-made to your business, driving insights and innovation.
                                </p>
                            </div>
                        </div>
                    </div>

                </Slide>

            </div>

        </>
    )
}

export default AboutUsServices