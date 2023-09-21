import React from "react";
import style from "./CommentsItems.module.css";

const CommentsItems = (props) => {
  return (
    <div className={style.myComments}>
      <div className={style.cardColor} style ={{background: props.comment.background}}></div>
      <div className={style.cardBody}>
        <p>{props.comment.title}</p>
      </div>
    </div>
  );
};

export default CommentsItems;
