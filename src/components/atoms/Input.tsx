import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lavender900};
  padding: 10px;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.lavender900};
  &:focus {
    outline: none;
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
