import React from 'react'
import styles from "./Information.module.css"

const Information = () => {
  return (
    <section className={styles.containerInformation}>
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQEXudOA50M6Jw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715089475266?e=1733356800&v=beta&t=Sz221MmdVkiHHIlfLlT_74Gk9-vykw7tRmHP_nUaRwI" alt="foto do perfil de pablo henrique" className={styles.imagemPerfil}/>
        <div className={styles.Informations}>
            <div>
                <h1>Olá, meu nome é Pablo Henrique e sou desenvolvedor de páginas web.</h1>
                <p>Eu estou fazendo o tecnologo de Analise e Desenvolvimento de sistemas, atualmente estou participando do projeto Oracle ONE na Alura.</p>
            </div>
            <div >
                <ul className={styles.listaRedesSociais}>
                    <li><a href="https://github.com/devpabloh">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/pablo-henrique-245709207/">Linkedin</a></li>
                    <li><a href="https://www.instagram.com/devpabloh/">Instagram</a></li>
                    <li><a href="">Currículo</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Information