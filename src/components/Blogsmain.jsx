
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Fade } from 'react-reveal';
import searchicon from '../images/search.svg'
import ServicesHead from './../Common_Views/Services/ServicesHead';
import BlogCard from '../Common_Views/Cards/BlogCards/BlogCard';
import blogsData from '../Data/BlogsData.json';
import Footer from './Footer';
import blog1 from '../images/BlogPosts/blog.png'
import Layout from '../Common_Views/Layout';
import { Helmet } from "react-helmet";


const BlogsMain = () => {

    const blogsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter blogs based on selected category and search term
    const filteredBlogs = selectedCategory
        ? blogsData[selectedCategory].filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : Object.values(blogsData).flat().filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Layout title='Technology Blogs - ML Bench' description="Explore insightful and informative blogs on the latest trends, technologies, and innovations in AI, ML, web development, and more. Stay updated with ML Bench's.">
            <Helmet>
                <link rel="canonical" href="https://ml-bench.com/blogs" />
            </Helmet>
            <Navbar />
            <Fade duration={1000}>
                <div>
                    <ServicesHead
                        title='Explore Our Blog for Your Daily Dose of Inspiration'
                        description='Start your day with a burst of motivation and insight from our well-selected blog.'
                    />
                </div>
            </Fade>
            <section id='blogsmain' className="d-flex justify-content-center align-items-center">
                <div className="blogs-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="blogs-container p-4 rounded shadow">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="search-bar">
                                        <div className="input-group">
                                            <input type="text" className="form-control search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                            <span className="input-group-text">
                                                <img src={searchicon} alt="searchicon" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* Category Selector */}
                                    <div className="category-selector">
                                        <select className="form-select selections" aria-label="Default select example" onChange={(e) => setSelectedCategory(e.target.value)}>
                                            <option value=''>All</option>
                                            {/* <option value="Mobile App">Mobile App</option>
                                            <option value="Web App">Web App</option>
                                            <option value="Watch App">Watch App</option>
                                            <option value="ML & AI">ML & AI</option>
                                            <option value="UI/UX">UI/UX</option> */}
                                        </select>
                                    </div>
                                </div>

                                {filteredBlogs.length === 0 && (
                                    <div className="no-results">No blogs found</div>
                                )}

                                {filteredBlogs.length > 0 && (
                                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${currentBlogs.length === 1 ? '1' : (currentBlogs.length === 2 ? '2' : '3')}, 1fr)`, gridGap: '2rem', maxWidth: '100%', margin: '0 auto' }}>
                                        {currentBlogs.map((blog, index) => (
                                            <div key={index}>
                                                <BlogCard
                                                    id={blog.id}
                                                    imageUrl={blog1}
                                                    title={'How to Find Memory Leaks in Web Applications'}
                                                    description={blog.description}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Pagination */}
                                {filteredBlogs.length > 0 && (
                                    <nav>
                                        <ul className="pagination">
                                            {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }, (_, i) => (
                                                <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
                                                    <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    );
};

export default BlogsMain;
