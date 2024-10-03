import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styles from "./Header.module.css"

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [fontSize, setFontSize] = useState('16px'); // Tamanho da fonte padrão

    const handleResize = () => {
        if (window.innerWidth <= 768) { // Ajuste o valor conforme necessário
            setIsMobile(true);
            setFontSize('13px'); // Tamanho da fonte para mobile
        } else {
            setIsMobile(false);
            setFontSize('16px'); // Tamanho da fonte para desktop
            }
        };

    useEffect(() => {
        handleResize(); // Verifica o tamanho da tela na montagem do componente
        window.addEventListener('resize', handleResize); // Adiciona o listener

    return () => {
        window.removeEventListener('resize', handleResize); // Remove o listener ao desmontar
    };
  }, []);

  return (
    <header>
    <nav className={styles.containerheader} style={{ fontSize }}>
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

    
    </header>
  )
}

export default Header