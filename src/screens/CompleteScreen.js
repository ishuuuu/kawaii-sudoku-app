import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CompleteScreenContainer = styled.div`
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
  text-align: center;
`;

const Title = styled.h2`
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium};
`;

const Confetti = styled.div`
  font-size: 2rem;
  margin: ${theme.spacing.medium} 0;
`;

const StatItem = styled.div`
  margin: ${theme.spacing.small} 0;
  font-size: 1.2rem;
`;

const ResetButton = styled.button`
  margin-top: ${theme.spacing.large};
  padding: ${theme.spacing.medium} ${theme.spacing.large};
  background-color: ${theme.colors.button.primary};
  border-radius: ${theme.borderRadius.large};
  font-size: 1.2rem;
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const CompleteScreen = ({ difficulty, timer, resetGame }) => {
  // タイマーをフォーマット (秒 -> 分:秒)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <CompleteScreenContainer>
      <Title>クリアおめでとう！</Title>
      <Confetti>🎉 🎊 ✨</Confetti>
      
      <StatItem>
        難易度: {
          difficulty === 'easy' ? 'かんたん' : 
          difficulty === 'medium' ? 'ふつう' : 'むずかしい'
        }
      </StatItem>
      
      <StatItem>
        クリア時間: {formatTime(timer)}
      </StatItem>
      
      <ResetButton onClick={resetGame}>
        もう一度遊ぶ
      </ResetButton>
    </CompleteScreenContainer>
  );
};

export default CompleteScreen;