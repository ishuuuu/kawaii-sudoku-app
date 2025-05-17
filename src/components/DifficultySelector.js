import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const DifficultySelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${theme.spacing.medium};
`;

const DifficultyButton = styled.button`
  width: 80%;
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius.large};
  background-color: ${props => 
    props.difficulty === 'easy' ? theme.colors.button.success :
    props.difficulty === 'medium' ? theme.colors.button.primary :
    theme.colors.button.secondary
  };
  color: ${theme.colors.text};
  font-size: 1.2rem;
  font-weight: bold;
  transition: ${theme.transitions.default};
  box-shadow: ${theme.shadows.soft};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const DifficultySelector = ({ onSelectDifficulty }) => {
  return (
    <DifficultySelectorContainer>
      <DifficultyButton 
        difficulty="easy"
        onClick={() => onSelectDifficulty('easy')}
      >
        かんたん
      </DifficultyButton>
      
      <DifficultyButton 
        difficulty="medium"
        onClick={() => onSelectDifficulty('medium')}
      >
        ふつう
      </DifficultyButton>
      
      <DifficultyButton 
        difficulty="hard"
        onClick={() => onSelectDifficulty('hard')}
      >
        むずかしい
      </DifficultyButton>
    </DifficultySelectorContainer>
  );
};

export default DifficultySelector;