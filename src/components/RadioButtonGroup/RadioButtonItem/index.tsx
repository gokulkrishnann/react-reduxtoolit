import React from 'react';
import { Button, ButtonContainer, Container, Label } from './styles';

export type RadioButtonItemProps = {
  value: string;
  label: string;
  isActive: boolean;
  error?: boolean;
  warning?: boolean;
  vertical?: boolean;
  onClick: (value: string) => void;
};

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({
  value,
  label,
  isActive,
  error = false,
  warning = false,
  vertical = false,
  onClick
}) => {
  const onClickHandler = (e: any) => {
    e.preventDefault();
    onClick && onClick(value);
  };

  return (
    <Container vertical={vertical}>
      <ButtonContainer>
        <Button
          role="radio"
          isActive={isActive}
          onClick={onClickHandler}
          $warning={warning}
          $error={error}
          aria-checked={isActive}
          value={value}
        />
      </ButtonContainer>
      <Label>{label}</Label>
    </Container>
  );
};

export default RadioButtonItem;
