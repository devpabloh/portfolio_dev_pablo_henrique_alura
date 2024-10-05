import React, { useState } from 'react'
import styles from "./Form.module.css"
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [resultMessage, setResultMessage] = useState("")

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    const {name, email, subject, message} = formData;
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send(
        "devpablog",  // Substitua pelo seu service ID
        "template_jwv3dvm",  // Substitua pelo seu template ID
        templateParams,
        "KJvZeqnQDhgfhOqBr"       // Substitua pelo seu user ID
      )
      .then(
        (response) => {
          setResultMessage("Mensagem enviada com sucesso!");
        },
        (error) => {
          setResultMessage("Erro ao enviar a mensagem.");
        }
      );
  }
    
  return (
    <section className={styles.container}>
        <div className={styles.containerheader}>
            <h3>Contato</h3>
            <p>Quer entrar em contato comigo?</p>
            <p>Preencha o formulário ao lado e entrarei em contato o mais rápido possível.</p>
        </div>
        <form action="" className={styles.containerForm} onSubmit={handleSubmit}>
            <label htmlFor="name">Nome / Name:</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required/>

            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>

            <label htmlFor="subject">Assunto:</label>
            <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required/>

            <label htmlFor="message">Mensagem:</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>

            <button type='submit' className={styles.buttons}>Enviar</button>

            <p>{resultMessage}</p>
        </form>
    </section>
  )
}

export default Form