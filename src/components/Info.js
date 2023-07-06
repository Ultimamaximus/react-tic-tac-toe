import React from 'react';
import "../css/info.css";

// Info component
const Info = () => {
  return (
    <div className="info">
      {/* Display player 1 */}
      <div className="player">Player 1: X</div>
      {/* Display player 2 */}
      <div className="player">Player 2: O</div>
    </div>
  );
};

export default React.memo(Info);
