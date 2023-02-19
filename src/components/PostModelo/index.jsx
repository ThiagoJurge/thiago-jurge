import React from "react";
import styles from "./PostModelo.module.css";

export const PostModelo = ({ fotoCapa, title, children }) => {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>
      <h2 className={styles.titulo}>{title}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
};
