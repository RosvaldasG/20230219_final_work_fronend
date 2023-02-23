import React from "react";
import styles from "./backbutton.module.css";

const BackButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.main}>
      {text}
    </button>
  );
};

export default BackButton;
