import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.large};
`;

const Title = styled.h1`
  color: ${theme.colors.text};
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.small};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  color: ${theme.colors.text};
  font-size: 1rem;
  margin-bottom: ${theme.spacing.medium};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>かわいい数独</Title>
      <Subtitle>パステルカラーで遊ぶ数独パズル</Subtitle>
    </HeaderContainer>
  );
};

export default Header;