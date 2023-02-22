import React from "react";
import styles from "./sortbutton.module.css";

const SortButton = ({ text, onClick }) => {
  return (
    <div className={styles.text}>
      Show
      <button onClick={onClick} className={styles.main}>
        {text}
      </button>
      Questions
    </div>
  );
};

export default SortButton;
