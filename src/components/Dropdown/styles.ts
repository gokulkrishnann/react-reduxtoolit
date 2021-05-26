import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Label = styled.label`
  padding-top: 5px;
`;

export const Select = styled.select`
  height: 40px;
  width: 80%;
  text-align: center;
  border-radius: 4px;
  background: white;
`;

export const TextBox = styled.input`
  margin-top: 5px;
  height: 20px;
`;

export const ErrorBox = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: center;
  flex-basis: 100%;
  height: 0;
`;
export const ErrorInfo = styled.label`
  color: red;
`;
