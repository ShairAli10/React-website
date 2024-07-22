import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import testimony from '../../images/Testimonial/person3.jpg';
import testimony2 from '../../images/Testimonial/person2.jpg';
import testimony3 from '../../images/Testimonial/person4.png';
import testimony4 from '../../images/Testimonial/person5.jpeg';
import star from '../../images/Testimonial/star.svg';
import star1 from '../../images/Testimonial/star1.svg';
import LazyLoad from 'react-lazy-load';



const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const numberOfSlides = 4; // Change this to the total number of slides

    const CustomPrevIcon = (
        <div className="custom-prev-icon" onClick={() => setIndex(index === 0 ? numberOfSlides - 1 : index - 1)}>
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.65842 16.3042C8.31398 16.6486 7.75553 16.6486 7.41109 16.3042L0.355085 9.24817C0.0106423 8.90373 0.0106423 8.34528 0.355085 8.00083L7.41109 0.944835C7.75553 0.600393 8.31398 0.600392 8.65842 0.944835C9.00286 1.28928 9.00286 1.84773 8.65842 2.19217L3.10809 7.7425L19.7948 7.7425C20.2819 7.7425 20.6768 8.13739 20.6768 8.6245C20.6768 9.11162 20.2819 9.5065 19.7948 9.5065L3.10809 9.5065L8.65842 15.0568C9.00287 15.4013 9.00287 15.9597 8.65842 16.3042Z" fill="#1E5BFA" />
            </svg>
        </div>
    );

    const CustomNextIcon = (
        <div className="custom-next-icon" onClick={() => setIndex(index === numberOfSlides - 1 ? 0 : index + 1)}>
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.3411 0.944855C12.6855 0.600413 13.244 0.600413 13.5884 0.944855L20.6444 8.00085C20.9889 8.3453 20.9889 8.90375 20.6444 9.24819L13.5884 16.3042C13.244 16.6486 12.6855 16.6486 12.3411 16.3042C11.9966 15.9597 11.9966 15.4013 12.3411 15.0569L17.8914 9.50652H1.20475C0.717639 9.50652 0.322754 9.11164 0.322754 8.62452C0.322754 8.13741 0.717639 7.74252 1.20475 7.74252H17.8914L12.3411 2.19219C11.9966 1.84775 11.9966 1.2893 12.3411 0.944855Z" fill="#1E5BFA" />
            </svg>
        </div>
    );

    return (
        <section id='testimonials'>
            <div className="container">
                <div className="testimonials-content">
                    <div className="testimonials-header">
                        <h2>Testimonials</h2>
                        <p>Read the feedback and experiences of happy clients in our testimonials.</p>
                    </div>

                    <div className="testimony">
                        <Carousel className='custom-carousel' activeIndex={index} onSelect={handleSelect} indicators={false} controls={false}>
                            <Carousel.Item>
                                <LazyLoad offset={0}>
                                    <img
                                        className="d-block person"
                                        src={testimony}
                                        alt="Client Picture"
                                        width={250}
                                        height={220}
                                        style={{ objectFit: 'cover' }}
                                        loading='lazy'
                                    />
                                </LazyLoad>

                                <Carousel.Caption className='carousel-caption override-margin-left'>
                                    <p>Excellent company to work with. Very professional and skilled with app development.</p>
                                    <h2>Bernadette Scott</h2>
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star1} alt="" />
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <LazyLoad offset={0}>
                                    <img
                                        className="d-block person"
                                        src={testimony2}
                                        alt="Client Picture"
                                        width={250}
                                        height={220}
                                        style={{ objectFit: 'cover' }}
                                        loading='lazy'
                                    />
                                </LazyLoad>
                                <Carousel.Caption className='carousel-caption override-margin-left'>
                                    <p>Truly impressed with the level of dedication and innovation displayed by ML Bench for the diabetes app. Keep up the excellent work, and I look forward to continuing our partnership to empower individuals living with diabetes.</p>
                                    <h2>Mohammad ALRashed</h2>
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <LazyLoad offset={0}>
                                    <img
                                        className="d-block person"
                                        src={testimony3}
                                        alt="Client Picture"
                                        width={250}
                                        height={220}
                                        style={{ objectFit: 'cover' }}
                                        loading='lazy'
                                    />
                                </LazyLoad>
                                <Carousel.Caption className='carousel-caption override-margin-left'>
                                    <p>It has been an absolute pleasure collaborating with ML-Bench for the development of our mobile apps and Laravel Dashboard. ML-Bench's creativity stood out in the careful design of our app's user interface, blending aesthetics and functionality seamlessly.</p>
                                    <h2>Stafeno</h2>
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <LazyLoad offset={0}>
                                    <img
                                        className="d-block person"
                                        src={testimony4}
                                        alt="Client Picture"
                                        width={250}
                                        height={220}
                                        style={{ objectFit: 'cover' }}
                                        loading='lazy'
                                    />
                                </LazyLoad>
                                <Carousel.Caption className='carousel-caption override-margin-left'>
                                    <p>Working with MLBench was a game-changer for bringing my app idea to life. They demonstrated unparalleled expertise and commitment from concept to launch. Their design team's creativity and proficiency transformed abstract concepts into visually stunning interfaces, ensuring a delightful user experience.</p>
                                    <h2>Curry</h2>
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                    <img className='star' src={star} alt="" />
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        {/* Custom pagination indicators */}
                        <div className="custom-indicators-container">
                            {/* Render custom indicators based on index */}
                            {/* {[...Array(numberOfSlides)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`custom-indicator ${i === index ? 'active' : ''}`}
                                    onClick={() => setIndex(i)}
                                >
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.0820312" y="0.646484" width="13.9557" height="13.9557" rx="6.97785" fill={i === index ? '#FFFFFF' : '#1E5BFA'} />
                                    </svg>
                                </div>
                            ))} */}

                        </div>
                    </div>
                </div>
            </div>
            {/* Prev and Next Icons */}
            <div className="custom-prev-next-icons">
                <div className="custom-prev-icon">{CustomPrevIcon}</div>
                <div className="custom-next-icon">{CustomNextIcon}</div>
            </div>
        </section>
    );
}

export default Testimonials;
