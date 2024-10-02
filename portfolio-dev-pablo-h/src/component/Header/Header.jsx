import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styles from "./Header.module.css"

const Header = () => {
    const  [isMobile, setIsMobile] = useState(false)

    useEffect(()=>{
        const handleReSize = () => {
            setIsMobile(window.innerWidth < 768); // Define se é mobile baseado na largura da tela
        };

      handleReSize();
      window.addEventListener('resize', handleReSize) // Adiciona um listener para monitorar redimensionamento da tela
      return ()=> window.removeEventListener('resize', handleReSize); // Remove o listener quando o componente for desmontado
    })

  return (
    <>
    <nav className={styles.containerheader}>
            <Link to="/">&lt;Dev. Pablo H./&gt;</Link>
        <ul className={styles.containerNav}>
            {!isMobile && (
                <li>
                    <Link to="/about">Sobre mim</Link>
                </li>
            )}
                
            {!isMobile && (
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
            )}
            {!isMobile && (
                <li>
                    <Link to="/hobbies">Hobbies</Link>
                </li>
            )}
            {!isMobile && (
                <li>
                    <Link to="/training">Formação</Link>
                </li>
            )}
            {!isMobile && (
                <li>
                    <Link to="/projects">Projetos</Link>
                </li>
            )}
            <li>
                <Link to="/contato">devpabloh@gmail.com</Link>
            </li>
        </ul>
    </nav>

    
    </>
  )
}

export default Header