import styled from 'styled-components';
import CurrencyInput from '../../CurrencyInput';
import TextInput from '../../TextInput';
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding-bottom: 5px;
`;
export const FormContainer = styled.form`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 10px;
`;
export const Contribution = styled(CurrencyInput)`
  margin-bottom: 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  border-top: 1px solid grey;
  justify-content: flex-end;
  padding-top: 15px;
`;

export const StyledTextInput = styled(TextInput)`
  padding-top: 20px;
  padding-bottom: 5px;
  width: 80%;
`;

export const LastNameInput = styled(TextInput)`
  padding-bottom: 20px;
  padding-top: 20px;
  width: 80%;
`;

export const EmailInput = styled(TextInput)`
  width: 90%;
`;
