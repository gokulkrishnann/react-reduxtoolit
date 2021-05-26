import React, { useLayoutEffect, useState } from 'react';
import { Container, Label } from './styles';
import RadioButtonItem from './RadioButtonItem';

export type Option = any;

export type RadioButtonGroupProps = {
  options: Option[];
  value?: string;
  vertical?: boolean;
  warning?: boolean;
  error?: boolean;
  label?: string;
  className?: string;
  onClick?: (value: string) => void;
};

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  value,
  options,
  vertical = false,
  warning = false,
  error = false,
  label,
  className,
  onClick
}) => {
  const [active, setActive] = useState('');

  useLayoutEffect(() => {
    setActive(value);
  }, [value]);

  const onClickHandler = (value) => {
    onClick && onClick(value);
    setActive(value);
  };

  return (
    <>
      <Label>{label}</Label>
      <Container vertical={vertical} className={className}>
        {options.map(([value, label]) => (
          <RadioButtonItem
            key={value}
            value={value}
            label={label}
            vertical={vertical}
            warning={warning}
            error={error}
            isActive={value === active}
            onClick={onClickHandler}
          />
        ))}
      </Container>
    </>
  );
};

export default RadioButtonGroup;
