import React, { useState, useEffect } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
