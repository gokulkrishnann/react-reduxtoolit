import styled from 'styled-components';

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Label = styled.label`
  padding-top: 5px;
`;

export const TextBox = styled.input`
  height: 40px;
  border: 1px solid grey;
  border-radius: 4px;
  text-align: start;
  padding: 5px;
`;

export const ErrorBox = styled.div`
  display: block;
  height: 0;
`;

export const ErrorInfo = styled.label`
  color: red;
  margin-right: auto;
`;
