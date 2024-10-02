import React from 'react'
import styles from "./About.module.css"

/* Componentes */
import Header from '../component/Header/Header'
import MyPerson from '../component/MyPerson/MyPerson'

const About = () => {
  return (
    <>
      <Header/>
      <main className={styles.containerMyPerson}>
        <MyPerson/>
      </main>
      
    </>
  )
}

export default About