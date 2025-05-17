import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.button.primary};
  border-radius: ${theme.borderRadius.small};
  font-weight: bold;
  font-size: 0.9rem;
`;

const Timer = ({ timer }) => {
  // タイマーをフォーマット (秒 -> 分:秒)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <TimerContainer>
      {formatTime(timer)}
    </TimerContainer>
  );
};

export default Timer;