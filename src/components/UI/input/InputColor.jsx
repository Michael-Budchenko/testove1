import React from "react";
import styles from "./InputColor.module.css";

const InputColor = ({onChange,value}) => {
  return <input value={value} className={styles.myInput} type="color" onChange={onChange}></input>;
};

export default InputColor;
