import React from 'react'

import img1 from '../images/Projects/project1.png'
import img2 from '../images/Projects/project2.png'
import img3 from '../images/Projects/project3.png'
import img4 from '../images/Projects/project4.png'
import img5 from '../images/Projects/project5.png'
import img6 from '../images/Projects/project6.png'

const Worksimg = () => {
    return (
        <section id='worksimg'>
            <div className="container">
                <h2 className='heart-head'>Our Design <span className="blue-tag">Expert’s</span>  Featured Work </h2>
                <div className="row text-center justify-content-center">
                    <div className="col-md-8 col-sm-10 text-center">
                        <p className="heart-p">We design mobile applications, web applications, and 3D & 2D Graphic Designs as per your requirements and customizations providing you with tailor-made designs and graphics for your project.</p>

                    </div>
                </div>
                <div className="row justify-content-center text-center mb all-projects">
                    <div className="col-lg-4">

                       
                            <div className="flip-card mb-5 ">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img1" src={img1} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="px-5">
                                            <h3>INSURTEK</h3>
                                            <p></p>
                                            <p>"Insuretek" allows users to easily file insurance claims in the event of a car accident. The app allows users to quickly and easily upload images of the accident and track the status of their claims, and receive updates on the progress of their case.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       

                       
                            <div className="flip-card mb-5 ">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img1" src={img2} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="px-5">
                                            <h3>Rice Classification</h3>
                                            <p></p>
                                            <p>Introducing our mobile app for rice grain classification: a fusion of computer vision and machine learning. Developed to streamline manual inspection, it empowers users to classify rice grains instantly. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       


                        
                            <div className="flip-card mb-5 ">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img1" src={img3} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="px-5">
                                            <h3>Unified App</h3>
                                            <p></p>
                                            <p>"Unified" TSN is an iOS and Android networking app designed specifically for university students. Main goal of this app is to provide a platform that solves the most common student problems while studying in university. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                    </div>

                    <div className="col-lg-4">

                    
                            <div className="blue-card mb-5">
                                <div className="blue-content">
                                    <h3>HomeMade App and
                                        Web Development</h3>

                                    <p>App & Web Development</p>

                                    <p>HomeMade is website for culinary in
                                        Jakarta City. We use web for founding food
                                        place nearly. Make easy for imigrant in
                                        Jakarta to explore food there. Keep exploring
                                        your favourite foods and enjoy!</p>
                                </div>
                            </div>
                        

                        
                            <div className="flip-card4 mb-5">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img4" src={img4} alt="" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="px-5">
                                            <h3>Ulaaf</h3>
                                            <p>Next era of AI base comment.</p>
                                            <p>
                                                Ulaaf is an AI based app that automatically comments a reaction (emoji) based on your facial expression for a particular post.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                      

                    </div>


                    <div className="col-lg-4">

                        
                            <div className="flip-card5 mb-5 align-items-center ">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img5" src={img5} alt="" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="px-5">
                                            <h3>ProBau App</h3>
                                            <p>ProBau offers a platform to seamlessly connect construction projects. Private users can effortlessly publish their projects, while businesses gain access to matching contracts through our Autopilot technology, which aligns keywords. Save time, expand your opportunities, and realize construction projects with ease.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        


                        
                            <div className="flip-card6 mb-5 align-items-center">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img6" src={img6} alt="" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="px-5">
                                            <h3>Koy App</h3>
                                            <p>Koy is your passport to meaningful connections, whether you're browsing books, hitting the gym, or savoring coffee. Wherever life takes you, our app helps you connect with like-minded individuals ready for engaging conversations and genuine interactions.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Worksimg