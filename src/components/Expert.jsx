import React from 'react'
import img from '../images/CNNModel.png'
import RealitySection from './../Common_Views/RealitySection';

const Expert = () => {
    return (
        <>
            <div className="container exp-main">
                <div>
                    <h2 className="text-center mt-5 pt-5">  ML Model for <span className="blue-tag"> Malaria Detection</span> Developed by <span className="blue-tag"> MLBench </span></h2>
                    <img src={img} className="ab3-img my-5 " alt="" width='100%'/>
                </div>
                <div className="back-expert">
                    <div className="row justify-content-center  ">
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="expert-content justify-content-center">
                                <h3 className="quality-head">
                                    Performance <br />
                                    evaluation
                                </h3>
                                <p className="exp-p my-5">Evaluating the performance and accuracy of machine learning models,<br /> and providing recommendations for improving their performance</p>
                            </div>

                        </div>

                        <div className="col-md-5 ">

                        </div>
                    </div>
                </div>

            </div>

         <RealitySection />

        </>
    )
}

export default Expert