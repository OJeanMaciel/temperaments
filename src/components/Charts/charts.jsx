'use client';
import React, { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { LoveLanguageEnum, TemperamentEnum } from '@/utils/enum';
import styles from './styles.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ selectedOptions, questions, quizType }) => {
  const calculateTotals = () => {
    const totals = quizType === 'temperament' ? {
      choleric: 0,
      melancholic: 0,
      sanguine: 0,
      phlegmatic: 0
    } : {
      words_of_affirmation: 0,
      physical_touch: 0,
      receiving_gifts: 0,
      quality_time: 0,
      acts_of_service: 0
    };

    questions.forEach((question, questionIndex) => {
      const selectedOptionIndex = selectedOptions[questionIndex];
      if (selectedOptionIndex !== undefined) {
        const selectedOption = question.options[selectedOptionIndex];
        const weights = selectedOption.weight;
  
        Object.keys(weights).forEach((key) => {
          if (totals.hasOwnProperty(key)) {
            totals[key] += weights[key];
          }
        });
      }
    });

    return totals;
  };

  const totals = useMemo(calculateTotals, [selectedOptions, questions, quizType]);

  const highestTrend = Object.keys(totals).reduce((a, b) => totals[a] > totals[b] ? a : b);

  const trendDescription = quizType === 'temperament' ?
    TemperamentEnum[highestTrend.toUpperCase()] :
    LoveLanguageEnum[highestTrend.toUpperCase()];

  const trendDescriptionFallback = quizType === 'temperament' ?
    TemperamentEnum[highestTrend.toUpperCase()] || "um temperamento desconhecido" :
    LoveLanguageEnum[highestTrend.toUpperCase()] || "uma linguagem do amor desconhecida";

  const data = quizType === 'temperament' ? {
    labels: [
      TemperamentEnum.CHOLERIC,
      TemperamentEnum.MELANCHOLIC,
      TemperamentEnum.SANGUINE,
      TemperamentEnum.PHLEGMATIC
    ],
    datasets: [
      {
        data: [
          totals.choleric,
          totals.melancholic,
          totals.sanguine,
          totals.phlegmatic
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0'
        ]
      }
    ]
  } : {
    labels: [
      LoveLanguageEnum.WORDS_OF_AFFIRMATION,
      LoveLanguageEnum.PHYSICAL_TOUCH,
      LoveLanguageEnum.RECEIVING_GIFTS,
      LoveLanguageEnum.QUALITY_TIME,
      LoveLanguageEnum.ACTS_OF_SERVICE
    ],
    datasets: [
      {
        data: [
          totals.words_of_affirmation,
          totals.physical_touch,
          totals.receiving_gifts,
          totals.quality_time,
          totals.acts_of_service
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  };

  return (
    <div className={styles.charts}>
      <h2 className={styles.title}>Resultado do Quiz</h2>
      <div className={styles.chartContainer}>
        <Pie data={data} options={options} />
      </div>
      <p className={styles.description}>
        {console.log(trendDescription)}
        {trendDescription ? 
          `Você tem uma maior tendência de ser ${trendDescription}.` :
          `Você tem uma maior tendência de ser ${trendDescriptionFallback}.`
        }
      </p>
    </div>
  );
};

export default Charts;
