import React from 'react';
import { useForm } from 'react-hook-form';

const BlogForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="blogName">Blog Name</label>
          <input type="text" className="form-control" id="blogName" {...register('blogName', { required: true })} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" {...register('description', { required: true })}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name</label>
          <input type="text" className="form-control" id="authorName" {...register('authorName', { required: true })} />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default BlogForm;

