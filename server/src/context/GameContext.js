import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const response = await fetch('http://localhost:5000/api/games');
    const data = await response.json();
    setGames(data);
  };

  return (
    <GameContext.Provider value={{ games, fetchGames }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
