import React from 'react';
import styles from './styles.module.css';
import Button from '../Button/button';

const Card = ({ title, description, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <Button label="Fazer Quiz" onClick={onClick} />
      </div>
    </div>
  );
};

export default Card;
