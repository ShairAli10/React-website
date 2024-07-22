import React from 'react';
import blog1 from '../images/BlogPosts/blog.png';
import blog2 from '../images/Blogs/blog2.png';
import blog3 from '../images/Blogs/blog3.png';
import blog4 from '../images/Blogs/blog4.png';
import calender from '../images/Blogs/calender.svg';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <section id="eigth">
            <div className="blogs-header">
                <h2> <span className="blue-tag">Blogs</span>  & Articles </h2>
                <p>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>
            </div>

            <div className="container d-flex justify-content-between align-items-stretch">

                <div className="col-lg-7">

                    <div className="card mb-4">
                        <img src={blog1} className="leftcard-img" alt="Card" loading='lazy' width={564} height={467}/>
                        <div className="card-body left-card">
                            <img src={calender} alt="" loading='lazy' width={23} height={24}/> Mar 25, 2024
                            <h3>How to Find Memory Leaks in Websites and Web Applications</h3>
                            <p>In the intricate world of web development, encountering memory leaks can be a tricky challenge.</p>
                            <Link to={`/blogs/${('How-to-Find-Memory-Leaks-in-Websites-and-Web-Applications')}`}>
                                <span className="blue-tag">Read More...</span>
                            </Link>

                        </div>
                    </div>

                </div>


                <div className="col-lg-5 d-flex flex-column justify-content-between right-blogs">

                    <div className="card mb-4">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={blog2} className="card-img" alt="Card 2" loading='lazy'/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Top 10 reasons to hire a dedicated team member</h4>
                                    <p className="card-text">From powering self-driving cars to enhancing online customer experiences, artificial…</p>
                                    <span className='blue-tag'>Read More...</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-4">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={blog3} className="card-img" alt="Card 3" loading='lazy' />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Devin AI Software engineer beginning of...</h4>
                                    <p className="card-text">Have you ever thought that you would encounter an AI-driven…</p>
                                    <span className='blue-tag'>Read More...</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-4">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={blog4} className="card-img" alt="Card 4" loading='lazy'/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Top 10 must-have AI chatbot healthcare features</h4>
                                    <p className="card-text">From powering self-driving cars to enhancing online customer experiences, artificial…</p>
                                    <span className='blue-tag'>Read More...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Blogs;
