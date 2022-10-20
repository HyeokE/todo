import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lavender300};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lavender900};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  height: 34px;
  padding: 0 16px;
  border-radius: 10px;
  z-index: 100;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
