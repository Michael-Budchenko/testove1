import React from "react";
import CommentsItems from "./comentsItems/CommentsItems";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentsItems comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentsList;
