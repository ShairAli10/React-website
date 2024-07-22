import React from 'react';
import styles from './BlogCard.module.css';
import calender from '../../../images/Blogs/calender.svg';
import { Link } from 'react-router-dom';

const BlogCard = ({ imageUrl, title, description, category }) => {
  
  const removeSpecialChars = (str) => {
    return str.replace(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, '-'); 
  };

  const cleanedTitle = removeSpecialChars(title);

  return (
    <div className={styles.blogCard}>
      <img src={imageUrl} alt="Blog" className={styles.blogImage} />
      <div className={styles.blogContent}>
        <span className={styles.blogCategory}><img src={calender} alt="" /> Mar 25, 2024</span>
        <h2 className={styles.blogTitle}>{title}</h2>
        <p className={styles.blogDescription}>{description}</p>
        <span className={styles.blogCategory}>{category}</span>
        <Link to={`/blogs/${cleanedTitle}`}>
          <span className={styles.blogDate}><span className="blue-tag">Read More...</span></span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
