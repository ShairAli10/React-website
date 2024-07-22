import React from 'react'
import Marquee from "react-fast-marquee";

import img1 from '../images/OurClients/client1.svg'
import img2 from '../images/OurClients/client2.svg'
import img3 from '../images/OurClients/client3.svg'
import img4 from '../images/OurClients/client4.svg'
import img5 from '../images/OurClients/client5.svg'
import img6 from '../images/OurClients/client6.svg'
import img7 from '../images/OurClients/client7.svg'
import img8 from '../images/OurClients/client8.svg'

const OurClients = () => {
  return (


    <section id='ourclients'>
      <div className="container-fluid ">
        <div className="row justify-content-center text-center">
          <div className="col-md-12 ">

            <h2 className="my-5"> Our <span className="blue-tag">Clients</span></h2>
            <Marquee className=" d-flex m" >
              <img src={img1} className="my-5 mx-5 px-5 " alt="" />
              <img src={img2} className="my-5 mx-5 px-5" alt="" />
              <img src={img3} className="my-5 mx-5 px-5" alt="" />
              <img src={img4} className="my-5 mx-5 px-5" alt="" />
              <img src={img5} className="my-5 mx-5 px-5" alt="" />
              <img src={img6} className="my-5 mx-5 px-5" alt="" />
              <img src={img7} className="mx-5 px-5 " alt="" />
              <img src={img8} className="mx-5 px-5" alt="" />
              {/* <img src={img9} className="mx-5 px-5" alt="" />
              <img src={img10} className="mx-5 px-5" alt="" />
              <img src={img11} className="mx-5 px-5" alt="" />
              <img src={img12} className="mx-5 px-5" alt="" /> */}
            </Marquee>




          </div>
        </div>
      </div>

    </section>
  )
}

export default OurClients;