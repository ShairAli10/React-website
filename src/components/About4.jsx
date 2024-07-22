import React from 'react'
import img1 from '../images/nabeel.png'
import img2 from '../images/6th.png'
import img3 from '../images/taimoor.png'
import img4 from '../images/tanveer.png'
import img5 from '../images/skndr.png'
import img6 from '../images/zain.png'
import Fade from "react-reveal";
const About4 = () => {
  return (
    <>

      <div className="mainf five-color">
        <div className="container py-5 ">
          <div className="row justify-content-center   wow fadeInUp" data-wow-duration=" 2s" data-wow-delay="0.2s">
            <div className="col-md-6 ">
              <Fade left duration={1000} distance="20px">
                <h2 className="team-head mt-5 mm">Meet Our Frontrunners
                </h2>
                <p className="my-4 mm">We believe that teams and employees are able to manage themselves. That’s why we’ve decided to work in a holacracy  – a flat structure at the core of which lay the values we care about most; Collaboration, Trust, and Flexibility thanks to the visionary leadership and work culture at mlbranch.
                </p>
                <button className="view-btn mm">View all them</button>
              </Fade>
            </div>
            <div className="col-md-3 text-center mt-5">

              <div className="hvrbox">
                <img src={img1} alt="Mountains" className="hvrbox-layer_bottom team-img" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text my-2">
                    <h4 className="hover-text font-weight-bold ">Nabeel Hassan </h4>
                    <p>Lead</p>
                    <p className="hover-text">CEO </p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-3 text-center mt-5">
              <div className="hvrbox">
                <img src={img2} alt="Mountains" className="hvrbox-layer_bottom team-img" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text my-2">
                    <h4 className="hover-text"> Abu Bakar</h4>
                    <p>Lead</p>
                    <p className="hover-text">  ML & AI </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center align-items-center mt-3 wow fadeInUp" data-wow-duration=" 2s"
            data-wow-delay="0.4s">
            <div className="col-md-3 my-3">
              <div className="hvrbox">
                <img src={img3} alt="Mountains" className="hvrbox-layer_bottom team-img" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text my-2">
                    <h4 className="hover-text"> Taimoor Arif
                    </h4>
                    <p>Lead</p>

                    <p className="hover-text"> iOS</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="hvrbox">
                <img src={img4} alt="Mountains" className="hvrbox-layer_bottom team-img" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text my-2">
                    <h4 className="hover-text"> Tanveer Ahmad
                    </h4>
                    <p>Lead</p>

                    <p className="hover-text"> Project Manager</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="hvrbox">
                <img src={img5} alt="Mountains" className="hvrbox-layer_bottom team-img" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text my-2">
                    <h4 className="hover-text"> Sikandar Bakht
                    </h4>
                    <p>Lead</p>
                    <p className="hover-text"> UI/UX Designer</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="hvrbox">
                <img src={img6} alt="Mountains" className="hvrbox-layer_bottom team-img" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text my-2">
                    <h4 className="hover-text"> Zain Naqvi
                    </h4>
                    <p>Lead</p>

                    <p className="hover-text"> Front-End Development</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About4