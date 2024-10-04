import React from 'react'
import styles from "./Form.module.css"

const Form = () => {
  return (
    <section className={styles.container}>
        <div className={styles.containerheader}>
            <h3>Contato</h3>
            <p>Quer entrar em contato comigo?</p>
            <p>Preencha o formulário ao lado e entrarei em contato o mais rápido possível.</p>
        </div>
        <form action="" className={styles.containerForm}>
            <label htmlFor="name">Nome / Name:</label>
            <input type="text" name="name" id="name" required/>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" required/>
            <label htmlFor="subject">Assunto:</label>
            <input type="text" name="subject" id="subject" required/>
            <label htmlFor="message">Mensagem:</label>
            <textarea name="message" id="message" required></textarea>
        </form>
    </section>
  )
}

export default Form