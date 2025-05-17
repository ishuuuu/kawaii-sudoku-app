import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import DifficultySelector from '../components/DifficultySelector';

const StartScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.soft};
  background-color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.large};
`;

const Title = styled.h2`
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium};
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: ${theme.spacing.large};
  line-height: 1.5;
`;

const StartScreen = ({ startGame }) => {
  return (
    <StartScreenContainer>
      <Title>ゲームを始めましょう！</Title>
      <Description>
        難易度を選んで、かわいい数独の世界で遊びましょう。
        各行、各列、各3x3ブロックに1から9までの数字を一つずつ入れてください。
      </Description>
      <DifficultySelector onSelectDifficulty={startGame} />
    </StartScreenContainer>
  );
};

export default StartScreen;