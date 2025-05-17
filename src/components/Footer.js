import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing.medium};
  margin-top: auto;
  font-size: 0.8rem;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <p>© {currentYear} かわいい数独アプリ</p>
    </FooterContainer>
  );
};

export default Footer;