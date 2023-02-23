import React from "react";
import styles from "./sortbutton.module.css";
import BackButton from "../backButton/BackButton";

const SortButton = ({ text, onClick }) => {
  return (
    <div className={styles.text}>
      Show
      <BackButton onClick={onClick} text={text} />
      Questions
    </div>
  );
};

export default SortButton;
