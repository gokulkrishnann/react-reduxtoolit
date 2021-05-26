import React from 'react';
import {
  TextInputContainer,
  Label,
  TextBox,
  ErrorBox,
  ErrorInfo
} from './styles';

type TextInputProps = {
  id?: string;
  name?: string;
  type: 'text';
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  errorMessage?: string;
  label?: string;
  dataTestId?: string;
};
const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  errorMessage,
  label,
  dataTestId
}) => {
  return (
    <>
      <TextInputContainer>
        <Label htmlFor={name}>{label}</Label>
        <TextBox
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          data-testid={dataTestId}
        />
        <ErrorBox>
          {errorMessage && (
            <ErrorInfo className={`fieldError${label}`}>
              {errorMessage}
            </ErrorInfo>
          )}
        </ErrorBox>
      </TextInputContainer>
    </>
  );
};
export default TextInput;
