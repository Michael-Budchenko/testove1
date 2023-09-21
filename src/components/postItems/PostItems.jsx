import React from "react";
import styles from "./PostItems.module.css";
import RemoveButton from "../UI/buttons/RemoveButton";

const PostItems = (props) => {

  return (
    <div
      onClick={() => props.selectPost(props.post.id)}
      style={{ borderLeft: props.post === props.selectPost ? "4px solid deeppink" : "white" }}
      className={styles.myItems}
    >
      <p>{props.post.title}</p>
      <div className={styles.comments}>{props.post.comments.length}</div>
      <div className="post__btn">
        <RemoveButton onClick={() => props.remove(props.post)}>Delete</RemoveButton>
      </div>
    </div>
  );
};

export default PostItems;
