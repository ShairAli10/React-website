import React from 'react';
import icon1 from '../images/Home/provenicon1.svg';
import process2 from '../images/MobileApp/process2.svg';
import process3 from '../images/MobileApp/process3.svg';
import process4 from '../images/MobileApp/process4.svg';
import ProcessCard from './../Common_Views/Cards/ProcessCard/ProcessCard';

import arrow1 from '../images/Process/arrow1.svg';
import arrow2 from '../images/Process/arrow2.svg';
import arrow3 from '../images/Process/arrow3.svg';

const WebProcess = () => {
    return (
        <section id='appprocess'>
            <div className="container">
                <div className="process-content">
                    <div className="process-header">
                        <h2>Web App Development Service<br /> <span className="blue-tag">Process</span> </h2>
                        <p>From brainstorm to brilliance, we develop your web app. Our process combines clear communication with advance tools to build apps users love</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cards">

                                <ProcessCard
                                    imgSrc={icon1}
                                    imgAlt="Requirement Analysis"
                                    arrowno={arrow1}
                                    firstParagraph="Step 01"
                                    title="Requirement Analysis"
                                    lastParagraph="We thoroughly analyze your needs and objectives to ensure a clear understanding of the project scope"
                                />

                                <ProcessCard
                                    imgSrc={process2}
                                    imgAlt="Design and Prototyping"
                                    arrowno={arrow2}
                                    firstParagraph="Step 02"
                                    title="Design and Prototyping"
                                    lastParagraph="Our team crafts visually appealing and user-friendly designs, incorporating your brand identity to create prototypes for feedback"
                                />

                                <ProcessCard
                                    imgSrc={process3}
                                    imgAlt="Development and Testing"
                                    arrowno={arrow3}
                                    firstParagraph="Step 03"
                                    title="Development and Testing"
                                    lastParagraph="We employ cutting-edge technologies to develop robust web applications, rigorously testing each feature to ensure functionality and reliability "
                                />

                                <ProcessCard
                                    imgSrc={process4}
                                    imgAlt=" Deployment and Support"
                                    firstParagraph="Step 04"
                                    title=" Deployment and Support"
                                    lastParagraph="Upon completion, we deploy the web application to your servers and provide ongoing support and maintenance to guarantee optimal performance"
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WebProcess