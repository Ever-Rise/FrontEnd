import React from "react";
import styles from "./styles.module.css";

const Input = ({ label, error, id, ...props }) => {
  return (
    <div className={styles.field}>
      {label ? (
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        className={`${styles.styledInput} ${error ? styles.hasError : ""}`}
        {...props}
      />
      {error ? (
        <span className={styles.errorText} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
