import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import erro404 from "../../assets/erro_404.png";
import { MainButton } from "../../components/MainButton";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte à página
          inicial.
        </p>
        <div onClick={() => navigate(-1)} className={styles.botaoContainer}>
          <MainButton size={"lg"}>Voltar</MainButton>
        </div>
        <img className={styles.imagemCachorro} src={erro404} alt={"Erro 404"} />
      </div>
      <div className={styles.espacoEmBranco} />
    </>
  );
};
