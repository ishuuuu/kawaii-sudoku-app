import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import StartScreen from '../screens/StartScreen';
import GameScreen from '../screens/GameScreen';
import CompleteScreen from '../screens/CompleteScreen';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
`;

const App = () => {
  const [gameStatus, setGameStatus] = useState('waiting'); // 'waiting', 'playing', 'completed'
  const [difficulty, setDifficulty] = useState('easy');
  const [board, setBoard] = useState([]);
  const [originalBoard, setOriginalBoard] = useState([]);
  const [timer, setTimer] = useState(0);
  const [hintsRemaining, setHintsRemaining] = useState(3);

  const startGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setGameStatus('playing');
    setTimer(0);
    setHintsRemaining(3);
    // ボードの初期化は GameScreen コンポーネントで行う
  };

  const completeGame = () => {
    setGameStatus('completed');
  };

  const resetGame = () => {
    setGameStatus('waiting');
  };

  return (
    <AppContainer>
      <Header />
      
      {gameStatus === 'waiting' && (
        <StartScreen startGame={startGame} />
      )}
      
      {gameStatus === 'playing' && (
        <GameScreen 
          difficulty={difficulty}
          board={board}
          setBoard={setBoard}
          originalBoard={originalBoard}
          setOriginalBoard={setOriginalBoard}
          timer={timer}
          setTimer={setTimer}
          hintsRemaining={hintsRemaining}
          setHintsRemaining={setHintsRemaining}
          completeGame={completeGame}
        />
      )}
      
      {gameStatus === 'completed' && (
        <CompleteScreen 
          difficulty={difficulty}
          timer={timer}
          resetGame={resetGame}
        />
      )}
      
      <Footer />
    </AppContainer>
  );
};

export default App;