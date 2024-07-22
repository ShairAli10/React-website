import React from 'react'
import ProfileCard from './../../Common_Views/Cards/ProfileCards/ProfileCards';
import nabeel from '../../images/Founders/nabeel.png'
import ammar from '../../images/Founders/ammar.png'


const Founders = () => {
  return (
    <section id='founders'>
      <div className="founders-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="founders-head">
                <h2>Meet <span className="blue-tag">Founders</span> </h2>
                <p>Meet the masterminds behind our software development company, who know how to shape the future of technology with expertise and innovation.</p>
              </div>

              <div className="profiles">

                <ProfileCard
                  imageSrc={nabeel}
                  name="Nabeel Hassan"
                  imageAlt='Nabeel hassan CEO at ML Bench'
                  description="Co-Founder & CEO"
                  iconSrc="https://www.linkedin.com/in/nabeel-hassan-365778136/s"
                />

                <ProfileCard
                  imageSrc={ammar}
                  name="Qazi Ammar Arshad"
                  imageAlt="Ammar arshad COF at ML Bench"
                  description="Co-Founder & President"
                  iconSrc="https://www.linkedin.com/in/qazi-ammar-arshad-a24895123/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founders