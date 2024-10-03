import React from 'react'
import styles from "./Cards.module.css"

/* Icones */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faBootstrap, faJs,faReact, faAngular } from '@fortawesome/free-brands-svg-icons'

const Cards = () => {
  return (
    <div className={styles.containerCards}>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faHtml5} className={styles.icon} />
            <p>HTML 5</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />
            <p>CSS</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faBootstrap} className={styles.icon} />
            <p>Bootstrap</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faJs} className={styles.icon}/>
            <p>Javascript</p>
        </div>
        <div className={styles.card}> 
        <FontAwesomeIcon icon={faHtml5} className={styles.icon} />
            <p>Typescript</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faReact} className={styles.icon}/>
            <p>React</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faAngular} className={styles.icon}/>
            <p>Angular</p>
        </div>
        <div className={styles.card}>
        <FontAwesomeIcon icon={faHtml5} className={styles.icon}/>
            <p></p>
        </div>
    </div>
  )
}

export default Cards