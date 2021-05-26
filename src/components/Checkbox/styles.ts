import styled from 'styled-components';

type CheckboxStyleProps = {
  $warning?: boolean;
  $error?: boolean;
  disabled?: boolean;
};

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  height: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > * {
    margin-right: 10px;
  }
`;

export const CheckmarkInput = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked {
    background: #2196f3;

    & ~ span {
      background: green;
      border: 1px solid grey;
    }

    & ~ span:after {
      display: block;
    }
  }

  &:hover {
    background: yellow;
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background: white;
  border-radius: 4px;
  border: ${({ $warning, $error }: CheckboxStyleProps) => {
    if (!$error && $warning) return '1px solid brown';
    if ($error) return '1px solid red';

    return '1px solid gray';
  }};

  &:hover {
    ${({ disabled }: CheckboxStyleProps) => {
      if (disabled) return '';

      return `background: white;`;
    }}
  }

  &:after {
    left: 7px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: 1px solid white;
    background: green;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: '';
    position: absolute;
    display: none;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: 15px;
`;
