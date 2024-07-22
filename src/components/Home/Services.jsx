import React from 'react'
import mob from '../../images/Services/mob.png'
import ai from '../../images/Services/ml.png';
import web from '../../images/Services/web.png';
import watch from '../../images/Services/watch.png';
import ui from '../../images/Services/ui.png';
import digital from '../../images/Services/digital.png';
import servicearrow from '../../images/Services/servicearrow.svg'
import ServiceCard from './../../Common_Views/Cards/ServiceCard';

import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <section id='services'>
            <div className="container ">

                <div className="row ">
                    <div className="col-lg-12">
                        <div className="services-head">
                            <h2> <span className="blue-tag">Services</span>  We Offer</h2>
                            <p>Enhancing your digital journey with creative, personalized solutions that promote progress and achievement.</p>

                        </div>
                    </div>


                    <div className="col-lg-4 col-md-4">

                        <ServiceCard
                            imgSrc={mob}
                            imgAlt="Mbile App Development"
                            title="MOBILE APP"
                            description="Using our skills, we transform your ideas into feature-rich applications for iOS and Android that attract users and produce measurable results."

                        />
                        <div className='arrow'>
                            <Link to='services/mobileapp'><img src={servicearrow} alt="" loading='lazy' width={18} height={14} /></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">

                        <ServiceCard
                            imgSrc={ai}
                            imgAlt="AI & ML solutions"
                            title="AI/ML"
                            description="We provide innovative technology solutions like,(AI, ML, Deep Learning, and Computer Vision) with specific to your business that support innovation and creativity."
                        />
                        <div className='arrow'>
                            <Link to='services/machinelearn'><img src={servicearrow} alt="" loading='lazy' width={18} height={14} /></Link>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">

                        <ServiceCard
                            imgSrc={web}
                            imgAlt="Web App development"
                            title="WEB APP"
                            description="Using modern technology and industry standards, we create scalable web applications that enhance user experiences and promote business growth."
                            imgHeight={210}
                        />

                        <div className='arrow'>
                            <Link to='services/webapp'><img src={servicearrow} alt="" loading='lazy' width={18} height={14} /></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">

                        <ServiceCard
                            imgSrc={watch}
                            imgAlt="Watch app development"
                            title="WATCH APP"
                            description="With our expertise in watch app development, we create smart and efficient applications for smartwatches that increase user friendliness and accessibility."
                        />
                        <div className='arrow'>
                            <Link to='services/watchapp'><img src={servicearrow} alt="" loading='lazy' width={18} height={14} /></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">

                        <ServiceCard
                            imgSrc={digital}
                            imgAlt="digital marketing solution"
                            title="DIGITAL MARKETING"
                            description="We provide a variety of strategies, including SEO, SMM, PPC, and content marketing, to help you engage with your target market, boost traffic, and optimize conversions."
                        />
                        <div className='arrow'>
                            <Link to='services/digitalmarketing'><img src={servicearrow} alt="" loading='lazy' width={18} height={14} /></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">

                        <ServiceCard
                            imgSrc={ui}
                            imgAlt="UI/UX design service"
                            title="UI/UX"
                            description="Converting thoughts into exquisitely designed and easily accessible user interfaces that expand the user experience and provide user engagement and happiness throughout each interaction."
                        />
                        <div className='arrow'>
                            <Link to='services/uiux'><img src={servicearrow} alt="" loading='lazy' width={18} height={14} /></Link>
                        </div>
                    </div>

                    <div className="quote">
                        <Link to='/contact'><button className='quote-btn'>Get a free Quote</button></Link>
                    </div>

                </div>


            </div>
        </section>
    )
}


export default Services