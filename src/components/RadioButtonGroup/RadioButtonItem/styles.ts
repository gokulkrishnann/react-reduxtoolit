import styled from 'styled-components';

type RadioButtonStyleProps = {
  vertical?: boolean;
  $warning?: boolean;
  $error?: boolean;
  isActive?: boolean;
  value?: string;
};

export const spaces = {
  height: 20,
  width: 20,
  borderWidth: 1,
  activeHeight: 20,
  activeWidth: 20,
  ActiveBorderWidth: 6
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ vertical }: RadioButtonStyleProps) =>
    vertical ? 'padding-bottom: 20px;' : 'padding-right: 20px;'}
`;

export const Input = styled.input.attrs({
  type: 'radio'
})`
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const ButtonContainer = styled.div`
  height: ${spaces.height + 2 * spaces.borderWidth}px;
  width: ${spaces.width + 2 * spaces.borderWidth}px;
`;

export const Button = styled.div`
  height: ${spaces.height}px;
  width: ${spaces.width}px;
  border-radius: 50%;
  background: white;
  border: ${({ $warning, $error }: RadioButtonStyleProps) => {
    if ($warning) return `${spaces.borderWidth}px solid blue`;
    if ($error) return `${spaces.borderWidth}px solid red`;

    return `${spaces.borderWidth}px solid green;`;
  }};

  ${({ isActive }: RadioButtonStyleProps) =>
    isActive &&
    `
    height: ${spaces.activeHeight}px;
    width: ${spaces.activeWidth}px;
    background: green;
    border: ${spaces.ActiveBorderWidth}px solid green
  `}
`;

export const Label = styled.span`
  font-size: 15px;
  padding-left: 10px;
`;
