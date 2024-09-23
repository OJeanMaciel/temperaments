'use client';
import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import logo from '../../assets/logo.png';

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
