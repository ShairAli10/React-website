import React from 'react'

const ToolsUI = () => {
    return (
        <section id='tools'>

            <div className="container">
                <h2 className="meth-head text-center mt-5 pt-5 mb-5 pb-4">
                    <span className="blue-tag">Technologies</span> & Frameworks
                </h2>
                <div className="row mb-5 pb-5">
                    <div className="col-md-3">
                        <h3 className="ul-head"> Design tools </h3>
                        <ul>
                            <li className="meth-list ">Figma</li>
                            <li className="meth-list ">Adobe XD</li>
                            <li className="meth-list ">Sketch</li>
                        </ul>

                    </div>
                    <div className="col-md-3">
                        <h3 className="ul-head"> Prototyping tools </h3>
                        <ul>
                            <li className="meth-list ">InVision</li>
                            <li className="meth-list ">Marvel</li>
                            <li className="meth-list ">Axure</li>

                        </ul>

                    </div>
                    <div className="col-md-3">
                        <h3 className="ul-head"> User research and testing tools </h3>
                        <ul>
                            <li className="meth-list ">UserTesting</li>
                            <li className="meth-list ">Optimal Workshop</li>
                            <li className="meth-list ">SurveyMonkey</li>
                        </ul>

                    </div>
                    <div className="col-md-3">
                        <h3 className="ul-head"> User analytics tools </h3>
                        <ul>
                            <li className="meth-list ">Google Analytics</li>
                            <li className="meth-list ">Mixpanel</li>
                            <li className="meth-list ">Amplitude</li>
                        </ul>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ToolsUI