import React from 'react'

/* CSS */
import styles from "./Formacao.module.css"

/* Faculdades */
import focca from "../../assets/focca.webp"
import Ieso from "../../assets/ieso-aqui-voce-pode.webp"
import fafire from "../../assets/unifafire.png"
import uca from "../../assets/faculdade-catolica-paulista.webp"


const Formacao = () => {
    return (
        
        <section className={styles.containerFormacao}>
            <div className={styles.cardFaculdade}>
                <div className={styles.logo}>
                    <img src={Ieso} alt="imagem da logo da Instituto de ensino superior de Olinda" />
                </div>
                <div className={styles.cardFaculdadeInformation}>
                    <h3>IESO - Instituto de ensino superior de Olinda</h3>
                    <p>Administração de empresas</p>
                    <p>De <time datetime="2012-01">01/2012</time> á <time datetime="2016-12">12/2016</time></p>
                </div>

            </div>
            <div className={styles.cardFaculdade}>
                <div className={styles.logo}>
                    <img src={focca} alt="imagem da logo da Faculdade de Olinda" />
                </div>
                <div className={styles.cardFaculdadeInformation}>
                    <h3>FOCCA - Faculdade de Olinda</h3>
                    <p>Ciências Contábeis</p>
                    <p>De <time datetime="2017-01">01/2017</time> á <time datetime="2019-12">12/2019</time></p>
                </div>
            </div>

            <div className={styles.cardFaculdade}>
                <div className={styles.logo}>
                    <img src={fafire} alt="imagem da logo da Centro Universitário Frassinetti do Recife" />
                </div>
                <div className={styles.cardFaculdadeInformation}>
                    <h3>FAFIRE - Centro Universitário Frassinetti do Recife</h3>
                    <p>Pós-graduação Gestão Tributária</p>
                    <p>De <time datetime="2020-01">01/2020</time> á <time datetime="2021-12">12/2021</time></p>
                </div>
            </div>

            <div className={styles.cardFaculdade}>
                <div className={styles.logo}>
                    <img src={uca} alt="imagem da logo da faculdade catolica paulista" />
                </div>
                <div className={styles.cardFaculdadeInformation}>
                    <h3>UCA - Faculdade Católica Paulista</h3>
                    <p>Análise e Desenvolvimento de Sistemas</p>
                    <p>Previsão de conclusão: <time datetime="2025-06">06/2025</time></p>
                </div>
            </div>
        </section>
    )
}

export default Formacao