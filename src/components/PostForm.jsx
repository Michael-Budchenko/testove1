import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import AddPostButton from "./UI/buttons/AddPostButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
	  comments: []
    };
    create(newPost);
    setPost({ title: "" });
  };
  return (
    <form className="post__form">
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Type name here..."
      />
      <AddPostButton onClick={addNewPost}>Add New</AddPostButton>
    </form>
  );
};

export default PostForm;
