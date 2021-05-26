import React, { FC, KeyboardEvent, useCallback } from 'react';
import { CurrencyInputContainer, Label, TextBox } from './styles';

interface Props {
  className?: string;
  max?: number;
  name?: string;
  onValueChange: (value: number) => void;
  label?: string;
  value: number;
}

const VALID_FIRST = /^[1-9]{1}$/;
const VALID_NEXT = /^[0-9]{1}$/;
const DELETE_KEY_CODE = 8;

const CurrencyInput: FC<Props> = ({
  className = '',
  max = Number.MAX_SAFE_INTEGER,
  onValueChange,
  name,
  label,
  value
}) => {
  const valueAbsTrunc = Math.trunc(Math.abs(value));
  if (
    value !== valueAbsTrunc ||
    !Number.isFinite(value) ||
    Number.isNaN(value)
  ) {
    throw new Error(`invalid value property`);
  }
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>): void => {
      const { key, keyCode } = e;
      if (
        (value === 0 && !VALID_FIRST.test(key)) ||
        (value !== 0 && !VALID_NEXT.test(key) && keyCode !== DELETE_KEY_CODE)
      ) {
        return;
      }
      const valueString = value.toString();
      let nextValue: number;
      if (keyCode !== DELETE_KEY_CODE) {
        const nextValueString: string =
          value === 0 ? key : `${valueString}${key}`;
        nextValue = Number.parseInt(nextValueString, 10);
      } else {
        const nextValueString = valueString.slice(0, -1);
        nextValue =
          nextValueString === '' ? 0 : Number.parseInt(nextValueString, 10);
      }
      if (nextValue > max) {
        return;
      }
      onValueChange(nextValue);
    },
    [max, onValueChange, value]
  );
  const handleChange = useCallback(() => {
    // DUMMY TO AVOID REACT WARNING
  }, []);
  const valueDisplay = (value / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR'
  });

  return (
    <CurrencyInputContainer>
      <Label>{label}</Label>
      <TextBox
        className={className}
        inputMode="numeric"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={valueDisplay}
      />
    </CurrencyInputContainer>
  );
};

export default CurrencyInput;
