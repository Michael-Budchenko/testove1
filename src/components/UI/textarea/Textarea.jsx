import React from "react";
import style from "./TextArea.module.css";

const Textarea = (props) => {
  return <textarea className={style.textArea} {...props} />;
};

export default Textarea;
