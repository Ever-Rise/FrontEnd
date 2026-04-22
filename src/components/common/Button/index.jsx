import React from "react";
import styles from "./styles.module.css";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  ...props
}) => {
  const variantClass =
    variant === "secondary" ? styles.secondary : styles.primary;

  return (
    <button
      type={type}
      className={`${styles.button} ${variantClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
