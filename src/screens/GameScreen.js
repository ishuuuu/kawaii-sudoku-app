import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import GameBoard from '../components/GameBoard';
import Timer from '../components/Timer';
import HintButton from '../components/HintButton';
import NumberPad from '../components/NumberPad';
import { generateSudoku } from '../utils/sudokuGenerator';
import { validateBoard } from '../utils/boardValidator';

const GameScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${theme.spacing.medium};
`;

const DifficultyTag = styled.div`
  padding: ${theme.spacing.small};
  background-color: ${props => 
    props.difficulty === 'easy' ? theme.colors.button.success :
    props.difficulty === 'medium' ? theme.colors.button.primary :
    theme.colors.button.secondary
  };
  border-radius: ${theme.borderRadius.small};
  font-size: 0.9rem;
  font-weight: bold;
`;

const GameScreen = ({ 
  difficulty, 
  board, 
  setBoard, 
  originalBoard, 
  setOriginalBoard,
  timer,
  setTimer,
  hintsRemaining,
  setHintsRemaining,
  completeGame
}) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [solution, setSolution] = useState([]);
  
  // 初期化: 数独の生成
  useEffect(() => {
    const { puzzle, solution } = generateSudoku(difficulty);
    setBoard(puzzle);
    setOriginalBoard(puzzle.map(row => [...row])); // ディープコピー
    setSolution(solution);
  }, [difficulty, setBoard, setOriginalBoard]);
  
  // タイマーの更新
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    
    return () => clearInterval(timerInterval);
  }, [setTimer]);
  
  // ボードの検証
  useEffect(() => {
    if (board.length > 0 && validateBoard(board)) {
      completeGame();
    }
  }, [board, completeGame]);
  
  // 数字の入力処理
  const handleNumberInput = (number) => {
    if (!selectedCell) return;
    
    const [row, col] = selectedCell;
    
    // 元のボードでは0（空白）でないセルは編集不可
    if (originalBoard[row][col] !== 0) return;
    
    const newBoard = board.map(boardRow => [...boardRow]);
    newBoard[row][col] = number;
    setBoard(newBoard);
  };
  
  // ヒント機能
  const useHint = () => {
    if (hintsRemaining <= 0 || !selectedCell) return;
    
    const [row, col] = selectedCell;
    
    // 既に正しい数字が入力されている場合
    if (board[row][col] === solution[row][col]) return;
    
    const newBoard = board.map(boardRow => [...boardRow]);
    newBoard[row][col] = solution[row][col];
    setBoard(newBoard);
    setHintsRemaining(prevHints => prevHints - 1);
  };
  
  return (
    <GameScreenContainer>
      <GameInfo>
        <DifficultyTag difficulty={difficulty}>
          {difficulty === 'easy' ? 'かんたん' : 
           difficulty === 'medium' ? 'ふつう' : 'むずかしい'}
        </DifficultyTag>
        <Timer timer={timer} />
        <HintButton 
          hintsRemaining={hintsRemaining} 
          useHint={useHint} 
        />
      </GameInfo>
      
      <GameBoard 
        board={board}
        originalBoard={originalBoard}
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
        solution={solution}
      />
      
      <NumberPad onNumberClick={handleNumberInput} />
    </GameScreenContainer>
  );
};

export default GameScreen;