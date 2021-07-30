import React from "react";
import { Container } from "./styles";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
};

export const Button = ({
  onClick,
  children,
  color = 'primary',
  disabled,
}: ButtonProps) => {
  return (
    <Container onClick={onClick} color={color} disabled={disabled}>
      {children}
    </Container>
  );
};
