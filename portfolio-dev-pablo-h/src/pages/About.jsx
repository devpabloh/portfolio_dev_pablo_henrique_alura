import React from 'react'
import Header from '../component/Header/Header'
import Information from '../component/Information/Information'
import styles from "./About.module.css"

const About = () => {
  return (
    <>
      <Header/>
      <main className={styles.aboutContainer}>
        <Information/>
      </main>
      
    </>
  )
}

export default About