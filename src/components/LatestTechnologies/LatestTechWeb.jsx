import React from 'react'
import img1 from '../../images/web_tool.png'

const LatestTechWeb = () => {
    return (
        <>

            <div className="container">
                <div className="row align-items-center justify-content-center marg">


                    <div className="col-md-6">
                        <h2>
                            Constantly Pushing Our <span className="blue-tag">Limits</span>  To Explore Latest Technologies
                        </h2>
                        <p className=" para-constant">
                        MLBench is a software house that specializes in offering exceptional services in back end web development. The team at MLBench has extensive experience in building back end APIs using a variety of technologies, including Codeigniter, Laravel, ReactJS, NodeJS, and Django. In addition to back end development, MLBench also offers a wide range of other web-related services, including front-end development, cloud services, and more.
                        </p>

                        <p className=" para-constant">
                        At MLBench, we believe in constantly pushing the limits of what is possible in web development. We are dedicated to staying up-to-date with the latest technologies and trends, and are always exploring new ways to build better, more efficient, and more powerful web applications. This dedication to innovation and excellence has allowed us to become a leader in the field of web development, and has earned us a reputation for providing exceptional services to our clients.
                        </p>
                        <p className=" para-constant">
                        If you are looking for exceptional services in back end web development, look no further than MLBench. With our expertise and experience, we are confident that we can help you build the web application of your dreams. Contact us today to learn more about how we can help.
                        </p>
                        <div className="row">

                        </div>

                    </div>



                    <div className="col-md-6 right">
                        <img className="tec-img mt-5" src={img1} alt="" />
                    </div>
                </div>
            </div>



        </>
    )
}

export default LatestTechWeb