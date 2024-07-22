import React from 'react'
import Slide from 'react-reveal/Slide';
import aboutimg from '../../images/about2.png';
import LazyLoad from 'react-lazy-load';

const Intro = () => {

    return (
        <>

            <div className="container aboutus">

                <div className="aboutus-content">

                    <div className="row">

                        <div className="col-lg-12 ">
                            <dive left>

                                <Slide left cascade>

                                    <div className="about-head">

                                        <h2> <span className='blue-tag'>About</span> Us</h2>

                                        <p>We’ve been helping customers since 2009 and take pride in delivering high-quality custom services designed to help you build, grow, and revolutionize your industry.</p>

                                    </div>

                                </Slide>
                            </dive>
                        </div>



                    </div>

                    {/* 2nd row */}

                    <div className="row aboutus-clients">

                        <div className="col-lg-8 col-one col-12 ">
                            <div className=" my-4">
                                <LazyLoad>
                                    <img src={aboutimg} className="snd-img" alt="About ML Bench" loading='lazy' />
                                </LazyLoad>
                            </div>

                        </div>

                        <div className="col-lg-4 col-two col-12">
                            <Slide left cascade>
                                <h4 className='blue-tag'>200+</h4>
                                <p> Successful Projects</p>

                                <div className='partition'></div>

                                <h4 className='blue-tag'>99%</h4>
                                <p>Client Satisfaction</p>


                            </Slide>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Intro