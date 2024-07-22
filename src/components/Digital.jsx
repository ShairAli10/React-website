import React from 'react'
import img1 from '../images/DigitalMarketing/digi1.png'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Digital = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })
    return (
        <>

            <div className="container my-5 py-5" id="Digital" ref={ref}>
                <div className="row">

                    <div className="col-md-6">


                     
                            <h2 className="digi-head">Exquisite of <br />
                                <span className="blue-tag">  SEO & Digital</span> Marketing</h2>

                            <p className="digip">We offer competitive pricing and personalized support to ensure that your SEO experience is always effective and successful. Let us help you improve your search engine visibility and drive more business with our SEO services.</p>

                            <div className="d-flex">
                                <div >
                                    <h3 className="digi-li "> Technical SEO Analysis</h3>
                                    <h3 className="digi-li "> Reputable Link Development</h3>
                                    <h3 className="digi-li "> Clear Cut Reporting</h3>

                                </div>

                                <div className='parent-li mx-5'>
                                    <h3 className="digi-li "> Intelligent Keyword Research</h3>
                                    <h3 className="digi-li "> Stellar Content Creation</h3>
                                    <h3 className="digi-li "> International SEO</h3>

                                </div>
                            </div>
                    

                    </div>
                    <div className="col-md-6 text-center">
                        <img src={img1} alt="" className="digi-img" />
                    </div>


                </div>
            </div >

        </>
    )
}

export default Digital