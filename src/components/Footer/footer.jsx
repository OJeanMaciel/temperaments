'use client';
import React from 'react';
import styles from './styles.module.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <p>&copy; 2024 JKM Solutions. Todos os direitos reservados.</p>
        </div>
        <div className={styles.socialSection}>
          <p>Siga-nos:</p> <br />
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
