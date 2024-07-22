import React from 'react';
import mission from '../../images/ourStory/mission.svg';
import vission from '../../images/ourStory/vission.svg';
import backImage from '../../images/WhyMl/why.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const OurStory = () => {
    return (
        <section id='ourstory'>
            <div className='our-story'>
                <div className="container Story">

                    <div className="story-text">
                        <h2> Our <span className='blue-tag'>Story</span> </h2>
                        <div className='story-para'>
                            <p>ML Bench is a software development company that offers businesses intelligent solutions through the use of modern technology. We seamlessly integrate your AI models into powerful web and mobile apps, unlocking their potential for users worldwide. With over 100+ successful projects and serving our solutions across 40+ countries, we're the trusted partner to bring your AI vision to reality.</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xl-6 col-md-6 story-sections">

                            <div className='mission'>

                                <img src={mission} alt="mission logo" />
                                <div className="mission-content">
                                    <h3>Our Mission</h3>
                                    <p>Our mission is to promote business growth and development by offering unique and modern technological products and services.</p>
                                </div>
                            </div>


                            <div className='vission'>
                                <img src={vission} alt="mission logo" />
                                <div className="vission-content">
                                    <h3>Our Vision</h3>
                                    <p>Our vision is to be the leader in creating groundbreaking technology solutions that unlock limitless possibilities for businesses around the world.</p>
                                </div>

                              
                            </div>

                            <div className="project">
                            <Link to = '/contact'><button className='project-btn'>Start Your Project Today</button></Link>
                            </div>

                            
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <div className="double-img">
                                <div ><img className='back-img' src={backImage} alt="Mission or Vission" /></div>
                               
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default OurStory;