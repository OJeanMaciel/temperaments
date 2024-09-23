// QuizPage.jsx

'use client';
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import temperamentQuestions from "../../utils/question_temperaments.json";
import loveLanguageQuestions from "../../utils/question_love.json";
import Charts from "@/components/Charts/charts";
import { GrNext, GrPrevious } from "react-icons/gr";
import Divider from "@/components/Divider/divider";

export default function QuizPage() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizType, setQuizType] = useState(""); // Adicionei o estado para o tipo de quiz

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const quizType = queryParams.get("type");

      if (quizType === "temperament") {
        setQuestions(temperamentQuestions);
        setQuizTitle("Quiz de Temperamentos");
        setQuizType("temperament"); // Define o tipo de quiz para temperamento
      } else if (quizType === "loveLanguage") {
        setQuestions(loveLanguageQuestions);
        setQuizTitle("Quiz das Linguagens do Amor");
        setQuizType("loveLanguage"); // Define o tipo de quiz para linguagens do amor
      } else {
        setQuizTitle("Quiz não encontrado");
      }
    }
  }, []);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <>
      <h1 className={styles.title}>{quizTitle}</h1>
      <br />
      <br />
      <div className={styles.progressContainer}>
        {questions.map((_, index) => (
          <span
            key={index}
            className={`${styles.progressDot} ${
              currentQuestionIndex === index ? styles.active : ""
            }`}
          ></span>
        ))}
      </div>
      <div className={styles.container}>
        {!showResults && questions.length > 0 && (
          <div className={styles.quizContainer}>
            <div className={styles.questionContainer}>
              <p className={styles.questionTitle}>
                {questions[currentQuestionIndex].question}
              </p>
              <Divider />
              <div className={styles.optionsContainer}>
                {questions[currentQuestionIndex].options.map(
                  (option, optionIndex) => (
                    <div key={optionIndex} className={styles.option}>
                      <input
                        type="radio"
                        id={`option-${currentQuestionIndex}-${optionIndex}`}
                        name={`question-${currentQuestionIndex}`}
                        value={optionIndex}
                        checked={
                          selectedOptions[currentQuestionIndex] === optionIndex
                        }
                        onChange={() =>
                          handleOptionChange(currentQuestionIndex, optionIndex)
                        }
                      />
                      <label
                        htmlFor={`option-${currentQuestionIndex}-${optionIndex}`}
                      >
                        {option.text}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className={styles.navigationButtons}>
              <button
                onClick={handlePreviousQuestion}
                className={styles.navButton}
                disabled={currentQuestionIndex === 0}
              >
                <GrPrevious /> Anterior
              </button>
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className={styles.navButton}
                >
                  Próximo <GrNext />
                </button>
              ) : (
                <button
                  onClick={() => handleSubmit()}
                  className={styles.submitButton}
                  type="button"
                >
                  Enviar
                </button>
              )}
            </div>
          </div>
        )}

        {showResults && questions.length > 0 && (
          <Charts 
            selectedOptions={selectedOptions} 
            questions={questions} 
            quizType={quizType}
          />
        )}

        {questions.length === 0 && !showResults && (
          <p className={styles.loadingText}>Carregando perguntas ou quiz não encontrado...</p>
        )}
      </div>
    </>
  );
}
