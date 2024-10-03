import React from 'react'
import styles from "./Hobbies.module.css"

/* Componentes */
import Header from '../component/Header/Header'
import CardsHobbies from "../component/CardsHobbies/CardsHobbies"

const Hobbies = () => {
  return (
    <>
      <Header/>
      <main className={styles.containerHobbies}>
        <CardsHobbies/>
      </main>
      
      
    </>
  )
}

export default Hobbies