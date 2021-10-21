import React from 'react';

import useInputUser from '../hooks/useInputUser';

const Start = ({ setUserName }) => {
  const { handleClick, inputRef } = useInputUser(setUserName);

  return (
    <div className="start">
      <input
        placeholder="Enter your name"
        className="start-input"
        ref={inputRef}
      />
      <button className="start-button" onClick={handleClick}>
        Start Game
      </button>
    </div>
  );
};

export default Start;
