import React from 'react';
import icon1 from '../images/Home/provenicon1.svg';
import process3 from '../images/MobileApp/process3.svg';
import process4 from '../images/MobileApp/process4.svg';
import process5 from '../images/MobileApp/process5.svg';
import ProcessCard from './../Common_Views/Cards/ProcessCard/ProcessCard';

import arrow1 from '../images/Process/arrow1.svg';
import arrow2 from '../images/Process/arrow2.svg';
import arrow3 from '../images/Process/arrow3.svg';

const MlProcess = () => {
    return (
        <section id='aiprocess'>
            <div className="container">
                <div className="process-content">
                    <div className="process-header">
                        <h2>Artifical Intelligence & Machine Learning <span className="blue-tag">services process</span> </h2>
                        <p>We take your project from initial concept to real-world implementation, ensuring every step is optimized for success</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cards">

                                <ProcessCard
                                    imgSrc={icon1}
                                    imgAlt="Understand & Collaborate"
                                    arrowno={arrow1}
                                    firstParagraph="Step 01"
                                    title="Understand & Collaborate"
                                    lastParagraph="We dive deep with you to grasp your goals and challenges. We'll assess your data and recommend the best AI/ML approach for your specific needs"
                                />

                                <ProcessCard
                                    imgSrc={process5}
                                    imgAlt="Craft & Train"
                                    arrowno={arrow2}
                                    firstParagraph="Step 02"
                                    title="Craft & Train"
                                    lastParagraph="Our team builds a custom model using the latest advancements in AI/ML. This could involve machine learning, deep learning, or computer vision, depending on your project"
                                />

                                <ProcessCard
                                    imgSrc={process3}
                                    imgAlt="Image description"
                                    arrowno={arrow3}
                                    firstParagraph="Step 03"
                                    title="Deploy & Integrate"
                                    lastParagraph="We seamlessly integrate your model into your existing workflows, ensuring smooth real-world application"
                                />

                                <ProcessCard
                                    imgSrc={process4}
                                    imgAlt="Image description"
                                    firstParagraph="Step 04"
                                    title="Support & Maintain"
                                    lastParagraph="We don't stop at deployment! We provide ongoing support and monitor your model's performance to guarantee it delivers continuous value"
                                />


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MlProcess