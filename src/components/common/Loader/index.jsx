import React from "react";
import styles from "./styles.module.css";

const Loader = ({ fullPage = false, variant = "spinner" }) => {
  const containerClassName = `${styles.container} ${fullPage ? styles.fullPage : ""}`;

  return (
    <section
      className={containerClassName}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {variant === "skeleton" ? (
        <div className={styles.skeletonBlock} />
      ) : (
        <div className={styles.spinner} aria-label="Carregando" />
      )}
    </section>
  );
};

export default Loader;
