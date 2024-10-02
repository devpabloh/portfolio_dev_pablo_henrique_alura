import React from 'react'

/* Componentes */
import Header from '../component/Header/Header'
import Information from '../component/Information/Information'

/* CSS */
import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
    <Header/>
    <main className={styles.homeContainer}>
        <Information/>
    </main>
    
    </>
  )
}

export default Home