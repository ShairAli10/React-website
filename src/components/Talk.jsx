import React from 'react';
import { Link } from 'react-router-dom';

const Talk = () => {
  return (
    <section id='talk'>
      <div className="talk-content">
        <div className="container-fluid">
          <div className="talk-header">
            <h4>Ready To Get started?</h4>
            <p>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>

           <Link to = '/contact'> <button className='talk-btn'>Let’s Talk</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Talk