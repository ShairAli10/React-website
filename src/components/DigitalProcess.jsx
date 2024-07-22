import React from 'react';
import icon1 from '../images/Home/provenicon1.svg';
import process3 from '../images/MobileApp/process3.svg';
import process4 from '../images/MobileApp/process4.svg';
import process5 from '../images/MobileApp/process5.svg';
import ProcessCard from './../Common_Views/Cards/ProcessCard/ProcessCard';

import arrow1 from '../images/Process/arrow1.svg';
import arrow2 from '../images/Process/arrow2.svg';
import arrow3 from '../images/Process/arrow3.svg';

const DigitalProcess = () => {
    return (
        <section id='aiprocess'>
            <div className="container">
                <div className="process-content">
                    <div className="process-header">
                        <h1>Digital marketing <span className='blue-tag'>services process</span> </h1>
                        <p>We take your project from initial concept to real-world implementation, ensuring every step is optimized for success</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cards">

                                <ProcessCard
                                    imgSrc={icon1}
                                    imgAlt="Understand & Plan"
                                    arrowno={arrow1}
                                    firstParagraph="Step 01"
                                    title="Understand & Plan"
                                    lastParagraph="Dig deep into client goals & create a data-driven strategy (SEO, Social Media & Design)."
                                />

                                <ProcessCard
                                    imgSrc={process5}
                                    imgAlt="Craft & Train"
                                    arrowno={arrow2}
                                    firstParagraph="Step 02"
                                    title="Execute & Create"
                                    lastParagraph="Implement SEO, craft engaging content & design visual assets."
                                />

                                <ProcessCard
                                    imgSrc={process3}
                                    imgAlt="Image description"
                                    arrowno={arrow3}
                                    firstParagraph="Step 03"
                                    title="Monitor & Analyze"
                                    lastParagraph="Track progress through reports & optimize based on data insights."
                                />

                                <ProcessCard
                                    imgSrc={process4}
                                    imgAlt="Image description"
                                    firstParagraph="Step 04"
                                    title="Communicate & Adapt"
                                    lastParagraph="Maintain open communication & refine strategies for continuous improvement."
                                />


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default DigitalProcess