import React from 'react';
import MemoryLeak from './MemoryLeak';


const BlogPosts = (props) => {
    

    
    const removeSpecialChars = (str) => {
        return str.replace(/[^a-zA-Z0-9-_]/g, '-'); 
    };

    const cleanedTitle = removeSpecialChars(decodeURIComponent(props.match.params.title));

    return (
        <>
            <MemoryLeak blogTitle={cleanedTitle} />
        </>
    );
};

export default BlogPosts;
