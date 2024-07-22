import React from 'react';
import icon1 from '../images/Home/provenicon1.svg';
import process2 from '../images/MobileApp/process2.svg';
import process3 from '../images/MobileApp/process3.svg';
import process4 from '../images/MobileApp/process4.svg';
import ProcessCard from './../Common_Views/Cards/ProcessCard/ProcessCard';

import arrow1 from '../images/Process/arrow1.svg';
import arrow2 from '../images/Process/arrow2.svg';
import arrow3 from '../images/Process/arrow3.svg';

const WatchappProcess = () => {
    return (
        <section id='appprocess'>
            <div className="container">
                <div className="process-content">
                    <div className="process-header">
                        <h2>Watch App <span className="blue-tag">Development</span>  service process</h2>
                        <p>We take a streamlined approach to craft exceptional watch apps</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cards">

                                <ProcessCard
                                    imgSrc={icon1}
                                    imgAlt="Requirement Analysis"
                                    arrowno={arrow1}
                                    firstParagraph="Step 01"
                                    title="Research & Strategies"
                                    lastParagraph="We work together with you to identify your goals, target market, and ideal features."
                                />

                                <ProcessCard
                                    imgSrc={process2}
                                    imgAlt="Design and Prototyping"
                                    arrowno={arrow2}
                                    firstParagraph="Step 02"
                                    title="Design and Prototyping"
                                    lastParagraph="With your input and refinement in mind, our UI/UX specialists create interactive prototypes and intuitive interfaces."
                                />

                                <ProcessCard
                                    imgSrc={process3}
                                    imgAlt="Development and Testing"
                                    arrowno={arrow3}
                                    firstParagraph="Step 03"
                                    title="Development & Integration"
                                    lastParagraph="Using the latest tools and frameworks, our talented developers create your watch app while ensuring a smooth integration with your current mobile app (if applicable)."
                                />

                                <ProcessCard
                                    imgSrc={process4}
                                    imgAlt=" Deployment and Support"
                                    firstParagraph="Step 04"
                                    title="Testing & Deployment"
                                    lastParagraph="Before your watch app is smoothly released on the app store, we thoroughly test it on real devices and a variety of platforms. "
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WatchappProcess