import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const NumberPadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing.small};
  width: 100%;
  max-width: 500px;
  margin-top: ${theme.spacing.medium};
`;

const NumberButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.main};
  color: ${theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.medium};
  box-shadow: ${theme.shadows.soft};
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: ${theme.shadows.soft};
  }
`;

const ClearButton = styled(NumberButton)`
  background-color: ${theme.colors.button.secondary};
  grid-column: span 2;
`;

const NumberPad = ({ onNumberClick }) => {
  const handleClear = () => {
    onNumberClick(0);
  };
  
  return (
    <NumberPadContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
        <NumberButton
          key={number}
          onClick={() => onNumberClick(number)}
        >
          {number}
        </NumberButton>
      ))}
      <ClearButton onClick={handleClear}>
        クリア
      </ClearButton>
    </NumberPadContainer>
  );
};

export default NumberPad;