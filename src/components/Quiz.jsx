import React, { useState } from 'react';
import Question from './Question';

const quizData = [
  {
    question: "Quelle est la capitale de la France?",
    options: ["Paris", "Londres", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Parmi les pays suivants, lequel est voisin de la France ?",
    options: ["Maroc", "L'Autriche", "Pologne", "Espagne"],
    answer: "Espagne"
  },
  {
    question: "Laquelle des villes ci-dessous est française?",
    options: ["Toulouse", "Milan", "Rome", "Bucarest"],
    answer: "Toulouse"
  },
  {
    question: "Qui a écrit les misérables ?",
    options: ["Victor Hugo", "Leo Tolstoy", "Gabriela Babnik", "James Joyce"],
    answer: "Victor Hugo"
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      if (quizData[currentQuestionIndex].options[selectedOption] === quizData[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestionIndex(nextQuestion);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    } else {
      alert("Veuillez sélectionner une option avant de soumettre.");
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="my-12 text-3xl font-semibold score-section">Vous avez obtenu {score} sur {quizData.length}!</div>
      ) : (
        <>
          <Question
            question={quizData[currentQuestionIndex]}
            selectedOption={selectedOption}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
          <div className="flex justify-center m-10 text-xl tracking-wider">
            <button className="submit-button clip-path-btn" onClick={handleSubmit}>Soumettre</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;