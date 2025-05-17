import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HintButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HintBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.small};
  background-color: ${props => 
    props.disabled ? `${theme.colors.button.hint}77` : theme.colors.button.hint};
  color: ${theme.colors.text};
  border-radius: ${theme.borderRadius.small};
  font-weight: bold;
  font-size: 0.9rem;
  opacity: ${props => props.disabled ? 0.7 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? 'none' : theme.shadows.soft};
  }
`;

const RemainingHints = styled.span`
  font-size: 0.8rem;
  margin-top: 2px;
`;

const HintButton = ({ hintsRemaining, useHint }) => {
  return (
    <HintButtonContainer>
      <HintBtn
        onClick={useHint}
        disabled={hintsRemaining <= 0}
      >
        ヒント
      </HintBtn>
      <RemainingHints>
        残り: {hintsRemaining}
      </RemainingHints>
    </HintButtonContainer>
  );
};

export default HintButton;