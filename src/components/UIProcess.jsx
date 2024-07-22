import React from 'react';
import icon1 from '../images/Home/provenicon1.svg';
import uiprocess2 from '../images/UI-UX/uiprocess2.svg';
import uiprocess3 from '../images/UI-UX/uiprocess3.svg';
import uiprocess4 from '../images/UI-UX/uiprocess4.svg';
import ProcessCard from './../Common_Views/Cards/ProcessCard/ProcessCard';

import arrow1 from '../images/Process/arrow1.svg';
import arrow2 from '../images/Process/arrow2.svg';
import arrow3 from '../images/Process/arrow3.svg';


const UIProcess = () => {
    return (
        <section id='appprocess'>
            <div className="container">
                <div className="process-content">
                    <div className="process-header">
                        <h2>The UI/UX Design <span className="blue-tag">Service Process</span> </h2>
                        <p>We take your project from initial concept to real-world implementation, ensuring every step is optimized for success</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cards">

                                <ProcessCard
                                    imgSrc={icon1}
                                    imgAlt="Requirement Analysis"
                                    arrowno={arrow1}
                                    firstParagraph="Step 01"
                                    title="User research"
                                    lastParagraph="We go in-depth to find out all the requirements and pain points of your target audience."
                                />

                                <ProcessCard
                                    imgSrc={uiprocess2}
                                    imgAlt="Design and Prototyping"
                                    arrowno={arrow2}
                                    firstParagraph="Step 02"
                                    title="Information Architecture"
                                    lastParagraph="To enable the best possible user navigation, we design logical and understandable information structures."
                                />

                                <ProcessCard
                                    imgSrc={uiprocess3}
                                    imgAlt="Development and Testing"
                                    arrowno={arrow3}
                                    firstParagraph="Step 03"
                                    title="Wireframing & Prototyping"
                                    lastParagraph="Before development starts, we create interactive prototypes to see and test design concepts. "
                                />

                                <ProcessCard
                                    imgSrc={uiprocess4}
                                    imgAlt="Visual Design"
                                    firstParagraph="Step 04"
                                    title="Visual Design"
                                    lastParagraph="Your brand identity is translated into a stunning and user-focused interface by our skilled designers."
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default UIProcess;