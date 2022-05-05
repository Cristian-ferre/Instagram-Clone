import React from "react";
import "./style/Post.css";
import Like from "./images/like.png"

function Post({ username, caption, imageUrl }) {
  return (

    <div className=" post">

      

        <div className="post__header">
          <h3>{username}</h3>
        </div>
        {/*  */}
        <img className="post_image" src={imageUrl} alt={caption} title={caption} />
        {/* */}
        <h4 className="post__text">
          <strong>{username}</strong> {caption}
        </h4>
        <div >
          <img src={Like} />
        </div>
      </div>
   

  );
}

export default Post;