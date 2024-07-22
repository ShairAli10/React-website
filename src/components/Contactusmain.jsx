import React, { useState } from 'react';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../Common_Views/Layout';
import ServicesHead from '../Common_Views/Services/ServicesHead';
import Footer from './Footer';
import ContactUsCard from '../Common_Views/Cards/ContactUsCards/contactuscards';
import contact1 from '../images/ContactUsMain/contact1.svg'
import contact2 from '../images/ContactUsMain/contact2.svg'
import contact3 from '../images/ContactUsMain/contact3.svg'
import pakistan from '../images/Footer/pakistan.svg'
import italy from '../images/Footer/italy.svg'
import {Helmet} from "react-helmet";

const Contactusmain = () => {
  const [user, setUser] = useState({
    fname: "",
    email: "",
    message: ""
  });

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!user.fname || !user.email || !user.message) {
      toast.error('Please complete the form', {
        autoClose: 3000
      });
    } else if (!phoneNumber || phoneNumber.length < 10) {
      toast.error('Please enter a valid phone number with at least 10 digits', {
        autoClose: 3000
      });
    } else {
      const mailTo = 'info@ml-bench.com';
      const subject = encodeURIComponent('Subject of the email');
      const body = encodeURIComponent(`Name: ${user.fname}\nEmail: ${user.email}\nPhone Number: ${phoneNumber}\nMessage: ${user.message}`);
      const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${mailTo}&su=${subject}&body=${body}`;

      setUser({ fname: "", email: "", message: "" });
      setPhoneNumber('')
      const gmailWindow = window.open(gmailComposeUrl);
    }
  };


  return (
    <Layout title='Contact Us  - ML Bench' description='Get in touch with ML Bench to explore how AI can help your business. Whether you have questions, ideas, or want to collaborate, our team is here to assist you.'>
          <Helmet>
          <link rel="canonical" href="https://ml-bench.com/contact" />
            </Helmet>
      <Navbar />
      <ToastContainer />

      <ServicesHead
        title='Contact US'
        description='Get in touch with our experts for your software needs'
      />
      <section id='contactusmain'>
        <div className="contact-header">
          <h2> Let’s <span className="blue-tag">Talk</span>  About Your Project </h2>
          <p>Question? Our Team is ready to support your vision</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form className="form d-flex" onSubmit={handleFormSubmit}>
                <div className="con-left">
                  <div className="left-in">
                    <div className="contact-text">
                      <h4>Contact Us </h4>
                      <p>We’d like to talk with you.</p>
                    </div>
                    <div className="contact-form">
                      <div className="form-group">
                        <input type="text" className="form-control" id="fname" placeholder="Your Name" autoComplete="off" name="fname" value={user.fname} onChange={handleInputs} />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Your Email Address" autoComplete="off" name="email" value={user.email} onChange={handleInputs} />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          className="form-control"
                          id="number"
                          placeholder="Enter your number"
                          autoComplete="on"
                          name="number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                        />
                      </div>

                      <div className="form-group">
                        <textarea style={{ resize: 'none' }} className="form-control" autoComplete="off" name="message" rows="5" id="message" placeholder="Message" value={user.message} onChange={handleInputs}></textarea>
                      </div>
                      <div className="send-btn">
                        <div className="my-3 col-sm-10">
                          <button type="submit" className="form-btn">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="con-right">
                  <div className="right-in">
                    <h5 className="right-h">Contact Information</h5>
                    <p className="right-para">Fill in the form and our Team will get back to you within 24 hours</p>
                    <ul className="right-li">
                      <li>info@ml-bench.com</li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='contactmain-cards' >
            <ContactUsCard
              imageSrc={contact1}
              title="Email Us:"
              text="info@ml-bench.com"
            />
            <ContactUsCard
              imageSrc={contact2}
              title="Call Us:"
              imageSrc1={pakistan}
              text="Pak. +92 324 6061581"
              imageSrc2={italy}
              text1="Italy. +39 349 8531752"
            />
            <ContactUsCard
              imageSrc={contact3}
              title="Our Location:"
              imageSrc1={pakistan}
              text="Pak. Building No 424 J3, Johar Town Lahore, Pakistan"
              imageSrc2={italy}
              text1="Italy. Via Carroceto 154/E, Aprilia 04011 (LT), Italy"
            />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )

}
export default Contactusmain;
