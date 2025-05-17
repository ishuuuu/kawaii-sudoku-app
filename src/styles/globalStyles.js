import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
  }

  button {
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    border-radius: 25px;
    border: none;
    padding: 0.5rem 1rem;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
    text-align: center;
  }
`;