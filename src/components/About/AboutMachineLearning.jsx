import React from 'react'
import img1 from '../../images/ServicesPages/MachineLearning/offer1.svg'
import img2 from '../../images/ServicesPages/MachineLearning/offer2.svg'
import img3 from '../../images/ServicesPages/MachineLearning/offer3.svg'
import img4 from '../../images/ServicesPages/MachineLearning/offer4.svg'
import img5 from '../../images/ServicesPages/MachineLearning/offer5.svg'
import img6 from '../../images/ServicesPages/MachineLearning/offer6.svg'
import Slide from "react-reveal";

const AboutMachineLearning = () => {
    return (
        <>

            <div className="mainab2 my-5">
                <h2 className="head-ab2 text-center">  What <span className="blue-tag">We</span>  Offer?</h2>
                <p className="snd-para text-center">We provide complete web app development services suited to your specific needs. Our professional developers use the latest tools, technologies, and frameworks to produce high-quality, scalable web apps.</p>
                <Slide up duration={1300}>

                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4 my-5 boxes-about">

                                <img src={img1} alt=""  width={42} height={45}/>

                                <h3 className="my-4"> <span className="blue-tag">TensorFlow</span>  Lite Model Development
                                </h3>
                                <p className="snd-para">
                                TensorFlow Lite can help you optimize your machine learning models for deployment on mobile devices and in resource-constrained scenarios. You can design high-performance, on-device AI experiences with our lightweight framework without sacrificing accuracy. We'll make sure your models are effective and ready for practical use..
                                </p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img2} alt=""/>

                                <h3 className="my-4"> <span className="blue-tag">Deep</span>  Learning
                                </h3>
                                <p className="snd-para">
                                Our deep learning solutions, based on frameworks like TensorFlow and PyTorch, are made for difficult challenges that require advanced learning capabilities. With exceptional efficiency and performance, we are able to create complex models such as recurrent neural networks (RNNs) for natural language processing applications or convolutional neural networks (CNNs) for image recognition via  our deep learning expertise.</p>

                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img3} alt="" />

                                <h3 className="my-4"> <span className="blue-tag">Data Preparation</span>  and Preprocessing
                                </h3>
                                <p className="snd-para">
                                Clear Data, Strong Models: The basis of any successful AI project is accurate data. To determine that your data is accurate, consistent, and useful for training your machine learning models, our data scientists carefully prepare and preprocess it. We work with libraries like Pandas and NumPy to optimize your AI models by cleaning, transforming, and feature engineering your data.
                                </p>
                            </div>
                        </div>

                        {/* row 2 */}


                        <div className="row justify-content-center my-1">
                            <div className="col-md-4 my-5 boxes-about">
                                <img src={img4} alt="" />

                                <h3 className=" my-4"> <span className="blue-tag">Model Deployment</span>  and Integration
                                </h3>
                                <p className="snd-para">
                                We help you to integrate your trained and customized model into your current apps and workflows. A seamless deployment method is provided by our proficiency with cloud platforms such as Google Cloud AI Platform and AWS SageMaker. We'll take care of everything, including API development and serverless hosting, to ensure that your AI solution is ready for immediate usage.</p>
                            </div>


                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img5} alt="" />

                                <h3 className=" my-4">  Custom <span className="blue-tag">AI</span>  Solutions
                                </h3>
                                <p className="snd-para">
                                We design solutions, not just models. Our team of AI experts will create a unique AI solution that addresses your specific problems and offers open opportunities for you. We will use machine learning, computer vision, and natural language processing in combination to offer real business value, whether it be through work automation, process optimization, or improved customer experiences.
                                </p>
                            </div>

                            <div className="col-md-4 my-5 boxes-about ">
                                <img src={img6} alt="" />

                                <h3 className=" my-4"> <span className="blue-tag">Computer</span>  Vision
                                </h3>
                                <p className="snd-para">
                                Benefit from our computer vision technology to discover insightful information from pictures and videos. We build models for tasks like object identification, image classification, and facial recognition using deep learning techniques. These technologies can be incorporated into your apps to enhance safety, automate procedures, and better comprehend your visual data.
                                </p>
                            </div>


                        
                        </div>
                    </div>

                </Slide>

            </div>

        </>
    )
}

export default AboutMachineLearning