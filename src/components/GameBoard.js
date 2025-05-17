import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import Cell from './Cell';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 1px;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  padding: 2px;
  background-color: ${theme.colors.text};
  border: 2px solid ${theme.colors.text};
  border-radius: ${theme.borderRadius.small};
  margin-bottom: ${theme.spacing.medium};
  
  /* 3x3グリッドの境界線 */
  & > div:nth-child(3n) {
    border-right: 2px solid ${theme.colors.text};
  }
  
  & > div:nth-child(n+19):nth-child(-n+27),
  & > div:nth-child(n+46):nth-child(-n+54) {
    border-bottom: 2px solid ${theme.colors.text};
  }
`;

const GameBoard = ({ 
  board, 
  originalBoard, 
  selectedCell, 
  setSelectedCell,
  solution
}) => {
  if (!board || board.length === 0) {
    return <div>Loading...</div>;
  }
  
  const handleCellClick = (row, col) => {
    setSelectedCell([row, col]);
  };
  
  return (
    <BoardContainer>
      {board.map((row, rowIndex) => (
        row.map((cellValue, colIndex) => {
          const isSelected = selectedCell && 
            selectedCell[0] === rowIndex && 
            selectedCell[1] === colIndex;
            
          const isFixed = originalBoard[rowIndex][colIndex] !== 0;
          
          // 正誤判定
          const isError = cellValue !== 0 && 
            solution[rowIndex][colIndex] !== cellValue;
          
          return (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cellValue}
              isSelected={isSelected}
              isFixed={isFixed}
              isError={isError}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          );
        })
      ))}
    </BoardContainer>
  );
};

export default GameBoard;