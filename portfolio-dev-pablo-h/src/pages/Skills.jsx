import React from 'react'
import styles from "./Skills.module.css"

/* Componentes */
import Header from '../component/Header/Header'
import Cards from '../component/Cards/Cards'

const Skills = () => {
  return (
    <>
      <Header/>
      <main className={styles.containerSkills}>
        <h1>Skills</h1>
        <Cards/>

      </main>
    </>
  )
}

export default Skills