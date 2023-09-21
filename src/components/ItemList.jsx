import React from "react";
import PostItems from "./postItems/PostItems";

const ItemList = ({ posts, remove, selectPost }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItems remove={remove} selectPost={selectPost} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default ItemList;
