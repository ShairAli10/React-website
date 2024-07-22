import React, { useState } from 'react';
import cross from '../images/ContactUsMain/cross.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactusPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, number, message } = formData;

        if (!name || !email || !number || !message) {
            toast.error('Please complete the form', { autoClose: 3000 });
            return;
        }

        if (number.length < 10) {
            toast.error('Please enter a valid phone number with at least 10 digits', { autoClose: 3000 });
            return;
        }

        const mailTo = 'shairaliyamin@gmail.com';
        const subject = encodeURIComponent('Subject of the email');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`);
        const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${mailTo}&su=${subject}&body=${body}`;

        setFormData({ name: '', email: '', number: '', message: '' });
        window.open(gmailComposeUrl);
    };

    return (
        <section id='contactuspopup'>
            <ToastContainer />
            {isOpen &&
                <div className="container">
                    <div className="popup-content popup-content-full">
                        <div className="header-popup">
                            <div className="popup-text">
                                <h3>Contact Us</h3>
                                <p>Questions? We’d like to talk with you.</p>
                            </div>
                            <div className="cross">
                                <img src={cross} alt="cross" onClick={() => onClose(false)} />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="inputs">
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Your Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Your Email Address'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="number"
                                    placeholder='Your Phone Number'
                                    value={formData.number}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    placeholder='Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="send-btn">
                                <button type='submit' className='form-btn'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </section>
    );
};

export default ContactusPopup;
