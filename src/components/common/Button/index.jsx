import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Button = ({ texto, link }) => {
  
  return (
    <Link to={link} className={styles.link}>
      <button className={styles.button}>{texto}</button>
    </Link>
  );
};

export default Button;
