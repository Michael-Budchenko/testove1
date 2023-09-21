import React, { useState } from "react";
import Textarea from "./UI/textarea/Textarea";
import AddCommentButton from "./UI/buttons/AddCommentButton";
import InputColor from "./UI/input/InputColor";

const CommentsForm = ({ create, id }) => {
  const [comment, setComment] = useState({ title: "", background: "#000000" });

  const addNewComments = (e) => {
    e.preventDefault();
    if (comment.background || comment.title) {
      const newComment = {
        ...comment,
        id: Date.now(),
      };
      create(newComment, id);
    }
    setComment({ title: "", background: "" });
  };

  return (
    <form className="comments__form">
      <InputColor value={comment.background} onChange={(e) => setComment({ ...comment, background: e.target.value })} />
      <Textarea
        value={comment.title}
        onChange={(e) => setComment({ ...comment, title: e.target.value })}
        type="text"
        placeholder="Type comment here..."
      />
      <AddCommentButton onClick={addNewComments}>Add New</AddCommentButton>
    </form>
  );
};

export default CommentsForm;
