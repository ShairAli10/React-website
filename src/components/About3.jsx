import React from 'react'
import imgab3 from '../images/whyml.png'
import './Btn.scss';
import { Link } from 'react-router-dom'
const About3 = () => {
    return (
        <>

            <div className="mainf five-color my-5 py-5">
                <div className="container my-2">
                    <div className="row justify-content-center v">
                        <div className="col-md-6">
                            <h1 className="head-ab3 ">Why <br />
                                <span className="color">ML </span> Branch?</h1>

                            <p className="para-ab3 my-5">
                                We are a technology company with a diverse team of 200+ skilled professionals, led by passionate leaders who set their example for success and are very dedicated to helping others reach their full potential through innovative product development, consulting, and R&D.
                            </p>

                            <Link to="/Contactusmain">

                                <div class="button-container-1">
                                    <span class="mas">Lets Talk!</span>
                                    <button id='work' type="button" name="Hover">Lets Talk!</button>
                                </div>

                            </Link>

                        </div>
                        <div className="col-md-6">
                            <div>                            <img src={imgab3} className="ab3-img my-5 " alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About3