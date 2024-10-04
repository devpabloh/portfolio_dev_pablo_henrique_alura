import React from 'react'

/* Componentes */
import Header from '../component/Header/Header'
import Form from "../component/Form/Form.jsx"

/* CSS */
import styles from "./Contato.module.css"

const Contato = () => {
  return (
    <>
      <Header/>
      <main className={styles.containerMain}>
        <Form/>
      </main>
    </>
  )
}

export default Contato