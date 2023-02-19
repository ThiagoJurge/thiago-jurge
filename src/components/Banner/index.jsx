import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";
import { MainButton } from "../MainButton";
import { Divider } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Bem-vindo</h1>
        <p className={styles.paragrafo}>Aqui você encontrará tudo sobre mim.</p>
        <p className={styles.paragrafo}>
          Me chamo Thiago Jurge, amante de tecnologia e programação. Estarei
          compartilhando por aqui vários de meus conhecimentos e projetos.
        </p>
        <p className={styles.paragrafo}>
          <a
            class="badge-base__link LI-simple-link"
            target={"_blank"}
            href="https://br.linkedin.com/in/thiago-jurge?trk=profile-badge"
          >
            <MainButton>
              <div
                class="badge-base LI-profile-badge"
                data-locale="pt_BR"
                data-size="medium"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="thiago-jurge"
                data-version="v1"
              >
                <LinkedinOutlined /> LinkedIn
              </div>
            </MainButton>
          </a>
          <Divider type="vertical" />
          <a target={"_blank"} href="https://github.com/ThiagoJurge">
            <MainButton>
              <GithubOutlined /> Github
            </MainButton>
          </a>
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden
        />
        <img className={styles.minhaFoto} src={minhaFoto} alt="Eu mesmo" />
      </div>
    </div>
  );
};
