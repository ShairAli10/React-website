import React from 'react'
import img1 from '../../images/ServicesPages/WebApp/offer1.svg'
import img2 from '../../images/ServicesPages/WebApp/offer2.svg'
import img3 from '../../images/ServicesPages/WebApp/offer3.svg'
import img4 from '../../images/ServicesPages/WebApp/offer4.svg'
import img5 from '../../images/ServicesPages/WebApp/offer5.svg'
import Slide from "react-reveal";
import RealitySection from './../../Common_Views/RealitySection';

const AboutWeb = () => {
    return (
        <>

            <div className="mainab2 my-5">
                <h2 className="head-ab2 text-center"> What <span className="blue-tag">We </span> Offer?</h2>
                <p className="snd-para text-center">We provide complete web app development services suited to your specific needs. Our professional developers use the latest tools, technologies, and frameworks to produce high-quality, scalable web apps.</p>
                <Slide up duration={1300}>

                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4 my-5 boxes-about">


                                <img src={img1} alt="" />



                                <h3 className="my-4"> <span className="blue-tag">Custom</span>  Web Development
                                </h3>
                                <p className="snd-para">
                                    With our proficiency in Python, Java, JavaScript (React, Angular, Vue.js), and PHP (Laravel, Symfony), we can bring your unique idea to life. We customize the framework to accurately meet the requirements of your project, delivering performance and scalability.
                                    Our main goal is to create safe, friendly web applications that work well with the infrastructure that we already have.
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img className='my-1' src={img2} alt="" />

                                <h3 className="my-4"><span className="blue-tag">CMS</span>  Development
                                </h3>
                                <p className="snd-para">
                                    Useful Content Management Systems (CMS) constructed with leading-edge technology, such as Drupal, WordPress, or headless CMS solutions, can empower your team. We enhance the fundamental features of CMSs by developing unique plugins and integrations that make it easier for you to handle intricate content structures and workflows.
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img3} alt="" />

                                <h3 className="my-4"><span className="blue-tag">E-commerce</span>  Development
                                </h3>
                                <p className="snd-para">
                                    We utilize advanced front-end frameworks like React or Vue.js in combination with powerful e-commerce systems like Magento, WooCommerce, or Shopify to build feature-rich online stores. Our strategy focuses a high priority on a smooth customer experience, utilizing tools like safe payment channels, user-friendly product filtering, and tailored recommendations to increase conversions and boost client satisfaction.
                                </p>
                            </div>
                        </div>

                        {/* row 2 */}


                        <div className="row justify-content-center my-1">
                            <div className="col-md-4 my-5 boxes-about">
                                <img src={img4} alt="" />

                                <h3 className=" my-4"> <span className="blue-tag">API</span>  Integration
                                </h3>
                                <p className="snd-para">
                                    By implementing industry-standard protocols like RESTful APIs and GraphQL, users can easily integrate your web application with many APIs and unlock the power of external data and functions. We provide effective and safe data interchange, enabling your web application to take use of outside resources and persist innovation.
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img5} alt="" />

                                <h3 className="my-4"> Website <span className="blue-tag">Support</span>  & Maintenance
                                </h3>
                                <p className="snd-para">
                                    We deploy best practices for website maintenance and remain aware with the most recent security upgrades. We make use of code version control systems (such as Git) and monitoring tools to guarantee peak performance and quick problem solving. We offer data-driven insights to enhance the functionality and user experience of your web application so that it can continue to fulfill your changing business requirements.
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

export default AboutWeb