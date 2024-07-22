import React from 'react';
import icon1 from '../images/Home/provenicon1.svg'
import icon2 from '../images/Home/provenicon2.svg';
import icon3 from '../images/Home/provenicon3.svg';
import icon4 from '../images/Home/provenicon4.svg';
import icon5 from '../images/Home/provenicon5.svg';

import arrow1 from '../images/Process/arrow1.svg';
import arrow2 from '../images/Process/arrow2.svg';
import arrow3 from '../images/Process/arrow3.svg';
import arrow4 from '../images/Process/arrow4.svg';
import VerticalCard from './../Common_Views/Cards/VerticalCard';

const Approach = () => {
  return (
    <section id='proven'>
      <div className="container">
        <div className="proven">
          <div className="proven-header">
            <h2>Our <span className="blue-tag">Approach</span>  to Achieve Your Goals</h2>
            <p>With our dynamic strategy that integrates innovative techniques for unparalleled outcomes, you can streamline your path to success.</p>
          </div>
          <div className="cards">
            <VerticalCard
              imgSrc={icon1}
              imgAlt="Image description"
              arrowno={arrow1}
              firstParagraph="Step 01"
              title="Comprehensive Analysis and Planning"
              lastParagraph="We gather strategic insights and continue in-depth analysis to establish the foundation for well-informed planning and decision-making."
            />
            <VerticalCard
              imgSrc={icon2}
              imgAlt="Image description"
              arrowno={arrow2}
              firstParagraph="Step 02"
              title="Ideation and Strategy Development"
              lastParagraph="Our team uses strategic intelligence and imaginative thinking to develop innovative approaches that are suitable for your unique requirements and goals."
            />
            <VerticalCard
              imgSrc={icon3}
              imgAlt="Image description"
              arrowno={arrow3}
              firstParagraph="Step 03"
              title="Iterative Design and Prototyping"
              lastParagraph="We ensure relevance and efficiency by developing solutions through design iteration and prototyping, depending on user feedback and emerging trends."
            />
            <VerticalCard
              imgSrc={icon4}
              imgAlt="Image description"
              arrowno={arrow4}
              firstParagraph="Step 04"
              title="Development and Execution"
              lastParagraph="We implement plans with confidence, utilizing resources and technology to achieve goals via smart planning and execution."
            />
            <VerticalCard
              imgSrc={icon5}
              imgAlt="Image description"
              firstParagraph="Step 05"
              title="Deployment and Evaluation "
              lastParagraph="In order to achieve long-term success, we continually evaluate performance metrics, solicit input, and modify plans according to market trends and organization goals."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
