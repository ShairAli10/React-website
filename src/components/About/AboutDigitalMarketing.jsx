import React from 'react'
import img1 from '../../images/m1.png'
import img2 from '../../images/m2.png'
import img3 from '../../images/m3.png'
import { Slide } from 'react-reveal'
import RealitySection from './../../Common_Views/RealitySection';


const AboutDigitalMarketing = () => {

  
    return (
        <>

            <div className="mainab2 my-5" > 
                <h2 className="head-ab2 text-center"> What <span className="blue-tag">We</span>  Offer?</h2>
                <p className="snd-para text-center">Every business needs to have a strong online presence in the modern digital world. Still, it could be challenging to keep up with the rapidly evolving field of digital marketing. Here's where we get involved. We provide a wide range of digital marketing services to help you accomplish the goals of your company. </p>
                <Slide up duration={1300}>

                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4 my-5 boxes-about">

                                <img src={img1} alt="" />

                                <h3 className="my-4"> Search Engine Optimization (SEO)
                                </h3>
                                <p className="snd-para">
                                    Ensure that the correct people see your website at the right moment. Our SEO experts will help you improve your website's position for pertinent keywords in search engine results pages (SERPs), which will increase organic traffic to your website.
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img2} alt="" />

                                <h3 className="my-4"> Social Media Marketing
                                </h3>
                                <p className="snd-para">
                                    Connect with your target market and build a loyal social media following. We'll help you with social media channel management, content creation that is engaging, and focused advertising strategies.</p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img3} alt="" />

                                <h3 className="my-4"> Graphic Designing
                                </h3>
                                <p className="snd-para">
                                    Having photos of a high standard could help you make an impression. Our graphic designers will create eye-catching images for your marketing materials, social media posts, and website.
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

export default AboutDigitalMarketing