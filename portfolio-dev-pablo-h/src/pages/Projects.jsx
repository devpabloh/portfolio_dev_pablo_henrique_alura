import React from 'react'

/* Componentes */
import Header from '../component/Header/Header'
import CardsProjects from '../component/CardsProjects/CardsProjects'

/* CSS */
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <>
      <Header/>
      <main className={styles.containerMain}>
        <CardsProjects />
      </main>
    </>
  )
}

export default Projects