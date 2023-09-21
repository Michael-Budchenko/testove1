import React from "react";
import styles from "./AddPostButton.module.css";

const AddPostButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

export default AddPostButton;
