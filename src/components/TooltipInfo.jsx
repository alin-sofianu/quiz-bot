import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="self-center mr-4 tooltip-wrapper" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 24 24">
        <path fill="#F9F871" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 9v2h2V9zm0 3v5h2v-5z" />
      </svg>
      {isVisible && <div className="tooltip">C'est un jeu-questionnaire amusant et stimulant ! Testez vos connaissances en répondant à une série de questions. Sélectionnez la meilleure réponse parmi les options proposées et cliquez sur « Soumettre » pour voir si vous avez raison. Visez un score parfait et apprenez de nouvelles choses en cours de route !</div>}
    </div>
  );
};

export default Tooltip;