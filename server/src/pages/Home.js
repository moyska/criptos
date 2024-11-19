import React, { useEffect } from 'react';
import { useGameContext } from '../context/GameContext';

const Home = () => {
  const { games, fetchGames } = useGameContext();

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      <h1>Loja de Jogos</h1>
      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
