import React from 'react'

/* Componentes */
import Header from '../component/Header/Header'
import Formacao from '../component/Formacao/Formacao'

/* CSS */
import styles from "./Training.module.css"

const Training = () => {
  return (
    <>
    <Header/>
    <main className={styles.containerTraining}>
      <h1>Formação acadêmica</h1>
      <Formacao/>
    </main>
  </>
  )
}

export default Training