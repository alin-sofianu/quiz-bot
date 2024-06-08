import React, { useState } from 'react';

const Question = ({ question, selectedOption, handleAnswerOptionClick }) => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredOption(index);
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
  };
  return (
    <div className="question-section">
      <div className="my-8 text-3xl question-text">{question.question}</div>
      <div className="answer-section">
        {question.options.map((option, index) => (

          <button
            key={index}
            className={`answer-button text-xl py-2
                                    ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleAnswerOptionClick(index)}
          >
            <span className="circle"></span>
            <span className="circle-inner"></span>
            {option}
          </button>

        ))}
      </div>
    </div >
  );
};

export default Question;