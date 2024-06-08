import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="self-center mr-4 tooltip-wrapper" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 16 16">
        <path fill="#5EF6FF" d="M12 10V8H7V6h5V4l3 3zm-1-1v4H6v3l-6-3V0h11v5h-1V1H2l4 2v9h4V9z" />
      </svg>
      {isVisible && <div className="tooltip tooltip-exit">Es-tu sûr de vouloir quitter le jeu ?</div>}
    </div>
  );
};

export default Tooltip;