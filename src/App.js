import React, { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import PostForm from "./components/PostForm";
import CommentsForm from "./components/CommentsForm";
import CommentsList from "./components/CommentsList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "test",
      comments: [],
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  function selectPost(id) {
    setSelectedPost(id);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    selectPost(newPost.id);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createComments = (newComment, postId) => {
    const mapped = posts.map((item) => {
      if (item.id === postId) {
        const newComments = [...item.comments, newComment];
        return { ...item, comments: newComments };
      }
      return item;
    });
    setPosts(mapped);
  };
  return (
    <div className="App">
      <div className="items__container">
        <h1>Items</h1>
        <PostForm create={createPost} />
        <ItemList remove={removePost} selectPost={selectPost} posts={posts} title="Items" />
      </div>
      <div className="comments__container">
        <h1>Comments# {Math.floor(Math.random() * 900000000 + 100000000)}</h1>
        <CommentsList comments={posts.find((item) => item.id === selectedPost)?.comments || []} />
        <CommentsForm id={selectedPost} create={createComments} />
      </div>
    </div>
  );
}

export default App;
