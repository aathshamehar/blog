import React from 'react';

const BlogForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="blog-name">Blog Name:</label>
        <input type="text" className="form-control" id="blog-name" />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea className="form-control" id="description"></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="author-name">Author Name:</label>
        <input type="text" className="form-control" id="author-name" />
      </div>

      <button type="submit" className="btn btn-primary">Add Blog</button>
    </form>
  );
};

export default BlogForm;
