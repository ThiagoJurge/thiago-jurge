import React from "react";
import { PostModelo } from "../../components/PostModelo";
import fotoCapa from '../../assets/sobre_mim_capa.png'
import fotoSobreMim from '../../assets/sobre_mim_foto.png'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
    return (
    <PostModelo
    fotoCapa={fotoCapa}
    title={"Sobre Mim"}
    >
        <h3 className={styles.subtitulo}>
            Olá, me chamo Thiago Jurge.
        </h3>
        <img src={fotoSobreMim} alt="Euzinho" className={styles.fotoSobreMim}/>
        <p className={styles.paragrafo}>
            Desde sempre, fui um amante de tecnologia. Apesar de, por muito tempo, não ter tido oportunidade para estudar na área, meu interesse era nítido.
        </p>
        <p className={styles.paragrafo}>
            Comecei a interagir com programação muito cedo, onde, por conta própria, aprendi muito sobre HTML, CSS e Javascript, a famosa trindade.
        </p>
        <p className={styles.paragrafo}>
            Meu primeiro "contato técnico" com a área foi quando iniciei o curso <strong>Técnico em Automação Industrial</strong>, pelo Senai, onde me formei no final de 2019.
        </p>
        <p className={styles.paragrafo}>
            Em 2020, consegui meu primeiro emprego formal na área tecnológica, atuando na Altarede Corporate onde, atualmente, ocupo o cargo de Analista de Redes e Telecomunicações.
        </p>
        <p className={styles.paragrafo}>
            Apesar de ainda não ter uma formação superior, possuo conhecimento na linguagem de programação <strong>Python</strong> e estou me aprofundando em <strong>ReactJs</strong> através dos cursos ministrados pela <strong>Alura</strong>.
        </p>
        <p className={styles.paragrafo}>
            Estou ansioso para ter minha primeira oportunidade como DEV Frontend, mas, enquanto a tão sonhada vaga não vem, estarei sempre estudando para alcançar ares ainda maiores.
        </p>
    </PostModelo>
    )
}