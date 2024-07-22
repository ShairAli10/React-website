import React from 'react';
import icon1 from '../images/Home/provenicon1.svg'
import process2 from '../images/MobileApp/process2.svg'
import process3 from '../images/MobileApp/process3.svg'
import process4 from '../images/MobileApp/process4.svg'
import ProcessCard from './../Common_Views/Cards/ProcessCard/ProcessCard';
import arrow1 from '../images/Process/arrow1.svg';
import arrow2 from '../images/Process/arrow2.svg';
import arrow3 from '../images/Process/arrow3.svg';


const AppProcess = () => {
    return (
        <section id='appprocess'>
            <div className="container">
                <div className="process-content">
                    <div className="process-header">
                        <h2>Mobile App Development Service <br /> <span className="blue-tag">Process</span> </h2>
                        <p>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cards">

                                <ProcessCard
                                    imgSrc={icon1}
                                    imgAlt="Image description"
                                    arrowno={arrow1}
                                    firstParagraph="Step 01"
                                    title="Requirement Gathering"
                                    lastParagraph="In the first step, gather system requirements. Collaborate with the client to collect data, including app purpose, audience, features, and platform preferences"
                                />

                                <ProcessCard
                                    imgSrc={process2}
                                    imgAlt="Image description"
                                    arrowno={arrow2}
                                    firstParagraph="Step 02"
                                    title="Design and Development"
                                    lastParagraph="After getting requirements, we form a thorough app development plan, crafting prototypes and UI/UX designs. We then code apps using suitable frameworks, prioritizing clean, modular code."
                                />

                                <ProcessCard
                                    imgSrc={process3}
                                    imgAlt="Image description"
                                    arrowno={arrow3}
                                    firstParagraph="Step 03"
                                    title="Testing and Implementation"
                                    lastParagraph="Post-deployment, we prioritize ongoing app maintenance, security, and quality assurance, conducting comprehensive tests and aiding in store listings for user engagement."
                                />

                                <ProcessCard
                                    imgSrc={process4}
                                    imgAlt="Image description"
                                    firstParagraph="Step 04"
                                    title="Maintenance and Updates"
                                    lastParagraph="Post-deployment, our commitment endures. We prioritize app maintenance, keeping it secure and compatible with new OS versions. We guarantee long-term functionality and relevance."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AppProcess