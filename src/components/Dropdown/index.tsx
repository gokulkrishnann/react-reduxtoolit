import React from 'react';
import {
  DropdownContainer,
  Label,
  Select,
  ErrorBox,
  ErrorInfo
} from './styles';

export type Option = {
  id: string;
  value: string;
};
type DropdownProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
  value?: string;
  errorMessage?: string;
  label?: string;
  options?: Option[];
};
const Dropdown: React.FC<DropdownProps> = ({
  id,
  name,
  defaultValue,
  onChange,
  value,
  errorMessage,
  label,
  options
}) => {
  return (
    <>
      <DropdownContainer>
        <Label htmlFor={name}>{label}</Label>
        <Select id={id} value={value} name={name} onChange={onChange}>
          <option id="0" value={defaultValue}>
            {defaultValue}
          </option>
          {options.map((option: { id: string; value: string }) => {
            return (
              <option key={option.id} id={option.id} value={option.value}>
                {option.value}
              </option>
            );
          })}
        </Select>
        <br />
        <ErrorBox>
          {errorMessage && (
            <ErrorInfo className={`fieldError${label}`}>
              {errorMessage}
            </ErrorInfo>
          )}
        </ErrorBox>
      </DropdownContainer>
    </>
  );
};
export default Dropdown;
