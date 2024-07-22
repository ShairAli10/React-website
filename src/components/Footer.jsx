import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../images/Footer/facebook.svg'
import linkedin from '../images/Footer/linkedin.svg'
import youtube from '../images/Footer/youtube.svg'
import instagram from '../images/Footer/instagram.svg'
import behance from '../images/Footer/behance.svg'
import mail from '../images/mail.png'
import ph from '../images/Phone.png'
import location from '../images/Footer/location.svg'
import pakistan from '../images/Footer/pakistan.svg'
import italy from '../images/Footer/italy.svg'
import logo from '../images/Footer/footerlogo.svg'
const Footer = () => {
    return (
        <section id='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="row row-1">
                        <div className="col-lg-4">
                            <div className="col-content">
                                <img src={logo} alt="logo"  width={120} height={37} loading='lazy'/>
                                <p>MLBench, AI powered platform for enterprises to develop deep learning based solutions and deploy them to production with one end-to-end solution.</p>

                                <ul class="social d-flex">
                                    <li><a href="https://www.facebook.com/MLBranch1?mibextid=ZbWKwL" target='_blank'> <img src={facebook} alt="facebook"  width={17} height={17}/></a></li>
                                    <li><a href="https://www.linkedin.com/company/ml-bench/" target='_blank'><img src={linkedin} alt='linkedin'  width={17} height={17}/></a></li>
                                    <li><a href="https://youtube.com/@mlbench5831" target='_blank'><img src={youtube} alt="youtube"   width={17} height={17}/></a></li>
                                    <li><a href="https://instagram.com/ml_bench?igshid=YmMyMTA2M2Y=" target='_blank'> <img src={instagram} alt="instagram"   width={17} height={17}/></a></li>
                                    {/* <li><a href="https://dribbble.com/mlbench" target='_blank'><FaDribbble /></a></li> */}
                                    <li><a href="https://www.behance.net/ml_bench" target='_blank'><img src={behance} alt="behance"   width={17} height={17}/></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="col-content">
                                <h6>Quick Links</h6>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/aboutus'>About Us</Link> </li>
                                    <li><Link to='/portfolio/mobileportfolio'>Portfolio</Link> </li>
                                    <li><Link to='/services/mobileapp'>Services</Link> </li>
                                    <li><Link to='/blogs'>Blogs</Link> </li>
                                    <li><Link to='/contact'>Contact Us</Link> </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-1"></div>

                        <div className="col-lg-2">
                            <div className="col-content">
                                <h6>Services</h6>
                                <ul>
                                    <li> <Link to='/services/machinelearn'>AI/ML Solution</Link></li>
                                    <li> <Link to='/services/mobileapp'>Mobile App Development</Link></li>
                                    <li> <Link to='/services/webapp'>Web App Development</Link></li>
                                    <li> <Link to='/services/watchapp'>Watch App Development</Link></li>
                                    <li> <Link to='/services/digitalmarketing'>Digital Marketing</Link></li>
                                    <li> <Link to='/services/uiux'>UI/UX Design</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>

                        <div className="col-lg-2">
                            <div className="col-content">
                                <h6>Portfolio</h6>
                                <ul>
                                    <li><Link to='/portfolio/aiportfolio'>AI/ML</Link></li>
                                    <li><Link to='/portfolio/uiportfolio'>UI/UX Design</Link></li>
                                    <li><Link to='/portfolio/mobileportfolio'>Mobile App</Link></li>
                                    <li><Link to='/portfolio/webportfolio'>Web App</Link></li>
                                    <li><Link to='/portfolio/watchportfolio'>Watch App</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row row-2">
                        <div className="col-lg-4">
                            <div className="col-content">
                                <h6>Contact Information</h6>
                                <p className='contact-ph'>
                                    <span><img src={ph} alt=""  width={31} height={31}/></span>
                                    <a href="tel:+923246061581">+92 324 6061581</a>
                                </p>

                                <p> <span><img src={mail} alt=""  width={31} height={31}/></span> <a className='info-a' href="mailto:info@ml-bench.com" target='_blank'>info@ml-bench.com</a></p>

                                <Link to='/contact'> <button className='connect-btn'>Lets Connect!</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="col-content">
                                <h6>Our Offices</h6>
                                <ul>
                                    <li><span><img src={pakistan} alt=""  width={35} height={25}/></span> Pakistan</li>
                                    <li>
                                        <span><img src={ph} alt="Phone icon"  width={31} height={31}/></span>
                                        <a href="tel:+923246061581">+92 324 6061581</a>
                                    </li>
                                    <li style={{ fontSize: '15px' }}><span><img src={location} alt="" width={25} height={25}/></span>  <a href="https://www.google.com/maps/search/?api=1&query=Building+No+424+J3,+Johar+Town+Lahore,+Pakistan" target='_blank'>
                                        Building No 424 J3, Johar Town Lahore, Pakistan
                                    </a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="col-content">
                                <h6 style={{ color: '#1E5BFA' }}>SSSS</h6>
                                <ul>
                                    <li><span><img src={italy} alt="" width={35} height={25}/></span> Italy</li>
                                    <li>
                                        <span><img src={ph} alt="Phone icon" width={31} height={31}/></span>
                                        <a href="tel:+393498531752">+39 349 8531752</a>
                                    </li>
                                    <li><span><img src={location} alt="" width={25} height={25}/></span> <a href="https://www.google.com/maps/search/?api=1&query=Via+Carroceto+154/E,+Aprilia+04011+(LT),+Italy" target='_blank'>
                                        Via Carroceto 154/E, Aprilia 04011 (LT), Italy
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



        </section>
    )
}

export default Footer