import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const COLOR = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);

    &:hover {
      background: linear-gradient(#2421f9, #e012c7);
    }
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);

    &:hover {
      background: linear-gradient(#bdbdcf, #bcb1b1);
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;

  &:hover {
    background: #d4d4d4;
    color: #f5f5f5;
    box-shadow: none;
  }
`;

export const Container = styled.button<ButtonProps>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;
