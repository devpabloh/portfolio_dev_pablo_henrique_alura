import React from 'react'

/* CSS */

import styles from "./CardsProjects.module.css"

/* Imagens dos projetos */
import receitas from "../../assets/projeto-miniblog.png"
import secretWords from "../../assets/projeto-words-secret.png"
import projetoRangeHotels from "../../assets/projeto-range-hotels.png"
import projetoListaDeContatos from "../../assets/projeto-lista-contatos.png"
import projetoReceitas from "../../assets/projeto-receitas.png"
import projetoCoffeeShop from "../../assets/projeto-coffee-shop.png"
import projetoSerDigital from "../../assets/projeto-ser-digital.png"
import projetoSpiderMan from "../../assets/projeto-spider-man.png"

const CardsProjects = () => {
  return (
    <div className={styles.container}>
        <h1>Projetos</h1>

        <div className={styles.containerCard}>
                <img src={receitas} alt="" />
            <div className={styles.containerCardInformations}>
                <div className={styles.containerProjectInformation}>
                    <h2>MiniBlog</h2>
                    <p>Informações complementares:</p>
                    <ul>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Firebase</li>
                        <li>Responsivo</li>
                    </ul>
                </div>
                <nav className={styles.containerNav}>
                    <ul>
                        <li><a href="https://github.com/devpabloh/Projeto_react_miniblog/tree/main/miniblog" target='_blank' rel="noreferrer">Repositório</a></li>
                        <li><a href=" https://pequenoblog.vercel.app/
                        " target='_blank' rel="noreferrer">Ver Demonstração</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={styles.containerCard}>
                <img src={secretWords} alt="" />
            <div className={styles.containerCardInformations}>
                <div className={styles.containerProjectInformation}>
                    <h2>Palavras Secretas</h2>
                    <p>Informações complementares:</p>
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <nav className={styles.containerNav}>
                    <ul>
                        <li><a href="https://github.com/devpabloh/Projeto_secret_words_em_React" target='_blank' rel="noreferrer">Repositório</a></li>
                        <li><a href="https://secretword-eta.vercel.app/" target='_blank' rel="noreferrer">Ver Demonstração</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={styles.containerCard}>
                <img src={projetoCoffeeShop} alt="" />
            <div className={styles.containerCardInformations}>
                <div className={styles.containerProjectInformation}>
                    <h2>Coffee Shop</h2>
                    <p>Informações complementares:</p>
                    <ul>
                        <li>HTML</li>
                        <li>Bootstrap</li>
                        <li>Responsivo</li>
                    </ul>
                </div>
                <nav className={styles.containerNav}>
                    <ul>
                        <li><a href="https://github.com/devpabloh/Projeto_Coffee_Shop" target='_blank' rel="noreferrer">Repositório</a></li>
                        <li><a href="https://projeto-coffee-shop-beryl.vercel.app/" target='_blank' rel="noreferrer">Ver Demonstração</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={styles.containerCard}>
                <img src={projetoSerDigital} alt="" />
            <div className={styles.containerCardInformations}>
                <div className={styles.containerProjectInformation}>
                    <h2>Projeto SerDigital</h2>
                    <p>Informações complementares:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Responsivo</li>
                    </ul>
                </div>
                <nav className={styles.containerNav}>
                    <ul>
                        <li><a href="https://github.com/devpabloh/Projeto_serdigital" target='_blank' rel="noreferrer">Repositório</a></li>
                        <li><a href="https://devpabloh.github.io/Projeto_serdigital/" target='_blank' rel="noreferrer">Ver Demonstração</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={styles.containerCard}>
                <img src={projetoSpiderMan} alt="" />
            <div className={styles.containerCardInformations}>
                <div className={styles.containerProjectInformation}>
                    <h2>Spider-man</h2>
                    <p>Informações complementares:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <nav className={styles.containerNav}>
                    <ul>
                        <li><a href="https://github.com/devpabloh/Projeto_multiverso_spider_man" target='_blank' rel="noreferrer">Repositório</a></li>
                        <li><a href="https://projeto-multiverso-spider-man.vercel.app/" target='_blank' rel="noreferrer">Ver Demonstração</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={styles.containerCard}>
                <img src={projetoRangeHotels} alt="" />
            <div className={styles.containerCardInformations}>
                <div className={styles.containerProjectInformation}>
                    <h2>Range Hotels</h2>
                    <p>Informações complementares:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Responsivo</li>
                    </ul>
                </div>
                <nav className={styles.containerNav}>
                    <ul>
                        <li><a href="https://github.com/devpabloh/Projeto_hotel" target='_blank' rel="noreferrer">Repositório</a></li>
                        <li><a href=" https://devpabloh.github.io/Projeto_hotel/" target='_blank' rel="noreferrer">Ver Demonstração</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={styles.containerCard}>
                <img src={projetoListaDeContatos} alt="" />
            <div className={styles.containerCardInformations}>
                <div className={styles.containerProjectInformation}>
                    <h2>Lista de contatos</h2>
                    <p>Informações complementares:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Responsivo</li>
                    </ul>
                </div>
                <nav className={styles.containerNav}>
                    <ul>
                        <li><a href="https://github.com/devpabloh/Projeto_lista_de_contatos" target='_blank' rel="noreferrer">Repositório</a></li>
                        <li><a href="https://devpabloh.github.io/Projeto_lista_de_contatos/" target='_blank' rel="noreferrer">Ver Demonstração</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={styles.containerCard}>
                <img src={projetoReceitas} alt="" />
            <div className={styles.containerCardInformations}>
                <div className={styles.containerProjectInformation}>
                    <h2>Receitas</h2>
                    <p>Informações complementares:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Responsivo</li>
                    </ul>
                </div>
                <nav className={styles.containerNav}>
                    <ul>
                        <li><a href="https://github.com/devpabloh/projeto_pagina_de_receita" target='_blank' rel="noreferrer">Repositório</a></li>
                        <li><a href="https://devpabloh.github.io/projeto_pagina_de_receita/
                        " target='_blank' rel="noreferrer">Ver Demonstração</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    </div>
  )
}

export default CardsProjects