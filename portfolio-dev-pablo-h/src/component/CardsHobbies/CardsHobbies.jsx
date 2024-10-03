import React from 'react'
import styles from "./CardsHobbies.module.css"

/* Icones */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGamepad, faFutbol, faMusic, faFilm, faDumbbell, faComputer, faCookieBite } from '@fortawesome/free-solid-svg-icons';

const CardsHobbies = () => {
  return (
    <div className={styles.containerCardsHobbies}>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faBook} className={styles.icon} />
            <p>Ler livros</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faGamepad} className={styles.icon} />
            <p>Jogar video game</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faFutbol} className={styles.icon} />
            <p>Jogar Futebol</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faMusic} className={styles.icon} />
            <p>Escutar música</p>
        </div>
        <div className={styles.card}> 
        <FontAwesomeIcon icon={faFilm} className={styles.icon} />
            <p>Ver filmes, animes e séries</p>
        </div>
        <div className={styles.card}> 
        <FontAwesomeIcon icon={faDumbbell} className={styles.icon} />
            <p>Academia</p>
        </div>
        <div className={styles.card}> 
        <FontAwesomeIcon icon={faComputer} className={styles.icon} />
            <p>Tecnologia</p>
        </div>
        <div className={styles.card}> 
        <FontAwesomeIcon icon={faCookieBite} className={styles.icon} />
            <p>comer</p>
        </div>
    </div>
  )
}

export default CardsHobbies