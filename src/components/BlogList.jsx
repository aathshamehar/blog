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
    <div className="row">
      {blogs.map((blog) => (
        <div key={blog.id} className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.body}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Author: {blog.author}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
