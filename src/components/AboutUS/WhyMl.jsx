import React from 'react'
import backImage from '../../images/WhyMl/why1.png'
import WhyCard from '../../Common_Views/Cards/whyCard'

import icon1 from '../../images/WhyMl/icon1.svg'
import icon2 from '../../images/WhyMl/icon2.svg'
import icon3 from '../../images/WhyMl/icon3.svg'

const WhyMl = () => {
    return (
        <section id='why'>

            <div className="mainf my-5 py-5">
                <div className="container my-2">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">

                            <div className="why-header">
                                <h2>Why Choose <span className="blue-tag"> ML</span> Bench?</h2>

                                <p className='why-p'>
                                We collaborate with you to figure out your objectives and assemble custom software solutions with start to end expertise. Our team of simulated AI and ML specialists design solutions that address your business needs. Choose ML-Bench for a future-proof advantage. 
                                </p>

                                <WhyCard
                                    icon={icon1}
                                    title="We Focus on Results"
                                    description="Our prosperity is estimated by yours. We work intimately with you to figure out your goals and develop solutions that generate substantial results . "
                                />

                            </div>

                        </div>
                        <div className="col-md-6">
                            <div >
                                <img className='why-img' src={backImage} alt="Why Choose ML Bench" />
                            </div>
                        </div>
                    </div>


                    <div className="row">


                        <div className="col-xl-6">
                            <WhyCard
                                icon={icon2}
                                title="Future-Proof Solutions"
                                description="We influence the latest technologies to build solutions that are scalable and versatile, ready to develop with your business."
                            />
                        </div>

                        <div className="col-xl-6">
                            <WhyCard
                                icon={icon3}
                                title="End-to-End Expertise "
                                description="From beginning to ongoing maintenance, we handle each aspect of your project, ensuring a consistent and efficient experience."
                            />
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyMl