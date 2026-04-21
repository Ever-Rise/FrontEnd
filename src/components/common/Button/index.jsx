import React from 'react';
import { StyledButton } from './styles';

const Button = ({ children, variant = 'primary', type = 'button', ...props }) => (
  <StyledButton type={type} ={variant} {...props}>
    {children}
  </StyledButton>
);

export default Button;
