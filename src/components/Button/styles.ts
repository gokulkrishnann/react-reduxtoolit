import styled, { css } from 'styled-components';

export type ButtonStyleProps = {
  primary: boolean;
  secondary: boolean;
  outlined: boolean;
  secondaryOutlined: boolean;
  rounded: boolean;
};

const buttonBaseStyle = css`
  min-width: 88px;
  height: 38px;
  padding: 10px 20px;
  border-radius: 4px;
  opacity: 1;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonComponent = styled.button`
  ${buttonBaseStyle}
  ${({ rounded }: ButtonStyleProps) => {
    if (rounded) {
      return 'border-radius: 18px;';
    }
  }}

  ${({ primary, secondary, outlined, secondaryOutlined }: ButtonStyleProps) => {
    if (primary) return primaryTheme;
    if (secondary) return secondaryTheme;
    if (outlined) return outlinedTheme;
    if (secondaryOutlined) return secondaryOutlinedTheme;
  }}
`;

const primaryTheme = css`
  background: green;
  border: 1px solid white;
  color: white;
`;

const secondaryTheme = css`
  background: grey;
  border: 1px solid grey;
  color: grey;

  &:hover {
    color: grey;
    background: white;
    border: 1px solid white;
  }

  &:active {
    color: grey;
    background: #bfbfbf;
    border: 1px solid #bfbfbf;
  }
`;

const outlinedTheme = css`
  background: white;
  color: #054d80;
  border: 1px solid #054d80;

  &:hover {
    background: #054d80;
    border: 1px solid #054d80;
    color: white;
  }
`;

const secondaryOutlinedTheme = css`
  background: white;
  color: grey;
  border: 1px solid white;

  &:hover {
    background: grey;
    border: 1px solid #cccccc;
  }

  &:active {
    background: #cccccc;
    border: 1px solid #cccccc;
  }
`;
