import React, { useState } from "react";
import './Postblog.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";

function Postblog() {
  // Static data for the blog post
  const post = {
    title: "My First Blog Post",
    content: "This is the content of the blog post. Here you can put a lot of interesting text that describes your topic.",
    likes: 23,
    comments: 5,
  };

  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);

  // Handle the like button click
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Handle the delete button click
  const handleDelete = () => {
    alert("Post deleted!");
  };

  // Handle the edit button click
  const handleEdit = () => {
    alert("Edit post");
  };

  return (
    <section className="post-blog">
      <div className="post-header">
        <h2>{post.title}</h2>
        <div className="post-actions">
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} /> Delete
          </button>
        </div>
      </div>

      <div className="post-body">
        <p>{post.content}</p>
      </div>

      <div className="post-footer">
        <div className="post-likes">
          <button onClick={handleLike}>
            <FontAwesomeIcon icon={faThumbsUp} /> {likes} Like{likes !== 1 ? "s" : ""}
          </button>
        </div>
        <div className="post-comments">
          <FontAwesomeIcon icon={faComment} /> {comments} Comment{comments !== 1 ? "s" : ""}
        </div>
      </div>
    </section>
  );
}

export default Postblog;
