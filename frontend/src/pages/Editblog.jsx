import React, { useState } from "react";
import './Editblog.css'

function Editblog() {
  // State for the form fields (excluding blog thumbnail)
  const [title, setTitle] = useState("My First Blog Post");
  const [content, setContent] = useState("This is the content of the blog post. Here you can put a lot of interesting text that describes your topic.");

  // Handle input changes
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Handle form submission
  const handleUpdate = (e) => {
    e.preventDefault();
    // Normally, you would send the updated data to the backend or update the state
    alert("Blog updated!");
    console.log("Updated Blog:", { title, content });
  };

  return (
    <section className="edit-blog">
      <h2>Edit Blog</h2>
      
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Blog Content</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter blog content"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Update Blog</button>
        </div>
      </form>
    </section>
  );
}

export default Editblog;
