import React from "react";
import styles from "./RemoveButton.module.css";

const RemoveButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

export default RemoveButton;
