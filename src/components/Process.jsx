import React from 'react'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import b3 from '../images/b3.png'
const Process = () => {
  return (
    <>

      <div className="process-back">
        <div className="container">

          <div className="row justify-content-center mx-5">
            <h1 className="our-h">Our Design Expert’s Process
            </h1>
            <h1 className="our-h1">Transforming conceptual designs into successful products
            </h1>
          </div>
          <div className="row mx-5 pb-5">

            <div className="col-md-4 py-3">

              <div className=" my-5">
                <img src={b1} alt="" />
              </div>
              <h3 className="exp-h mb-4"> Examination
              </h3>
              <p className="exp1 mb-4">- Research Insights
              </p>
              <p className="exp1 mb-4">- Conceptual </p>
              <p className="exp1 mb-4">- Designing
              </p>
            </div>

            <div className="col-md-4 py-3">

              <div className=" my-5">
                <img src={b2} alt="" />
              </div>
              <h3 className="exp-h mb-4"> Development
              </h3>
              <p className="exp1 mb-4">- Agile Prototyping
              </p>
              <p className="exp1 mb-4">- Wireframing
              </p>
              <p className="exp1 mb-4">- Visual design
              </p>
            </div>

            <div className="col-md-3 py-3">

              <div className=" my-5">
                <img src={b3} alt="" />
              </div>
              <h3 className="exp-h mb-4">Quality Assurance
              </h3>
              <p className="exp1 mb-4">- Usability Testing
              </p>
              <p className="exp1 mb-4">- Heuristic Review
              </p>

            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Process