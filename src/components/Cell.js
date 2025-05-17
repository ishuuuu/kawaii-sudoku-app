import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => {
    if (props.isSelected) return theme.colors.cellSelected;
    if (props.isFixed) return theme.colors.cellFixed;
    return theme.colors.cellEditable;
  }};
  color: ${props => props.isError ? 'red' : theme.colors.text};
  font-weight: ${props => props.isFixed ? 'bold' : 'normal'};
  font-size: 1.2rem;
  cursor: pointer;
  transition: ${theme.transitions.default};
  
  &:hover {
    background-color: ${props => 
      props.isSelected ? theme.colors.cellSelected : 
      `${theme.colors.cellSelected}99`}; /* 60% opacity */
  }
`;

const Cell = ({ value, isSelected, isFixed, isError, onClick }) => {
  return (
    <CellContainer
      isSelected={isSelected}
      isFixed={isFixed}
      isError={isError}
      onClick={onClick}
    >
      {value !== 0 ? value : ''}
    </CellContainer>
  );
};

export default Cell;