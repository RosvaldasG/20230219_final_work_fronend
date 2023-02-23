import React from "react";
import styles from "./input.module.css";

const TextInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      {/* <input
        className={styles.main}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      /> */}
      <textarea
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={styles.main}
        // rows={4}
        // cols={40}
      />
    </div>
  );
};

export default TextInput;
