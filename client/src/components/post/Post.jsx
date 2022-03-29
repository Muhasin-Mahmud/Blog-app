import React from "react";
import {Link} from 'react-router-dom'
import "./post.css";
import postImg_1 from "../../images/photo-1485081669829-bacb8c7bb1f3.jpeg";
const Post = ({ post }) => {
  const PF ='http://localhost:5000/images/'
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="lake_austria" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

        <Link to = {`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
