import React, { FC, useState } from 'react';
import Dropdown from '../../Dropdown';
import Button from '../../Button';
import {
  Wrapper,
  ButtonWrapper,
  StyledTextInput,
  EmailInput,
  FormContainer,
  Contribution
} from './styles';
import Checkbox from '../../Checkbox';
import RadioButtonGroup from '../../RadioButtonGroup';
import contact from '../../..//assets/contact.png';
type Props = {
  addContactHandler: (param) => void;
  closeModal: () => void;
};

type Option = any;
const errorInitialState = { first_name: '', email: '' };
export const isEmpty = (object: unknown): boolean =>
  object != null && !Object.values(object).some((x) => x !== null && x !== '');
const AddContact: FC<Props> = ({ closeModal, addContactHandler }) => {
  const [state, setState] = useState({
    id: '',
    first_name: '',
    last_name: '',
    department: '',
    email: '',
    gender: 'Male',
    isChecked: false,
    contribution: 0,
    avatar: contact
  });
  const [error, setError] = useState(errorInitialState);
  const validateForm = () => {
    const fields = ['first_name', 'email'];
    const values = [state.first_name, state.email];
    console.log('values', values);

    for (let i = 0; i < fields.length; i++) {
      if (values[i] === '') {
        validateField(fields[i], values[i]);
      }
    }
    console.log('error', error);
  };

  const addHandler = (e) => {
    e.preventDefault();
    validateForm();

    if (!isEmpty(error)) {
      console.log('error', error);
      return;
    }
    addContactHandler(state);
    setState({ ...state, first_name: '', email: '' });
  };

  const validateField = (fieldName: string, value: string) => {
    const errorDetails = { ...error };
    console.log('errorDetails', errorDetails);
    console.log('fieldName', fieldName);
    console.log('value', value);
    switch (fieldName) {
      case 'first_name':
        errorDetails.first_name =
          value.length === 0 ? 'first name is required' : '';
        break;
      case 'email':
        errorDetails.email = value.length === 0 ? 'email is required' : '';
        break;
      default:
        break;
    }
    console.log('after addHandler errorDetails', errorDetails);
    setError(errorDetails);
    // return errorDetails;
  };

  const getOptions = (): Option[] => {
    const option1 = ['Male', 'Male'] as Option;
    const option2 = ['Female', 'Female'] as Option;
    const option3 = ['Other', 'Other'] as Option;

    return [option1, option2, option3];
  };

  const onChangeHandler = (e) => {
    if (typeof e === 'function') {
      e.preventDefault();
    }
    if (!e.target) {
      setState({ ...state, contribution: e });
    } else {
      const { name, value } = e.target;
      validateField(name, value);
      setState({ ...state, [name]: value });
    }
  };

  const genderHandler = (value) => {
    setState({ ...state, gender: value });
  };
  return (
    <FormContainer onSubmit={addHandler} data-testid="form">
      <Wrapper>
        <StyledTextInput
          label="First Name:"
          type="text"
          name="first_name"
          placeholder="Name"
          dataTestId="firstname"
          value={state.first_name}
          onChange={onChangeHandler}
          errorMessage={error.first_name !== '' && 'First name is required'}
        />
        <StyledTextInput
          label="Last Name:"
          type="text"
          name="last_name"
          placeholder="Last Name"
          dataTestId="lastname"
          value={state.last_name}
          onChange={onChangeHandler}
        />
      </Wrapper>
      <RadioButtonGroup
        options={getOptions()}
        onClick={(value) => genderHandler(value)}
        value={state.gender}
        label="Gender:"
      />
      <EmailInput
        type="text"
        name="email"
        label="Email:"
        placeholder="Email"
        data-testid="Email"
        value={state.email}
        onChange={onChangeHandler}
        errorMessage={error.email !== '' && 'Email is required'}
      />
      <Wrapper>
        <Dropdown
          label="Department:"
          name="department"
          defaultValue="Select Department"
          value={state.department}
          options={[
            { id: '1', value: 'Marketing' },
            { id: '2', value: 'Sales' },
            { id: '3', value: 'IT' },
            { id: '4', value: 'Support' }
          ]}
          onChange={onChangeHandler}
        />
        <Contribution
          max={100000}
          name="contribution"
          label="Contribution:"
          value={+state.contribution}
          onValueChange={onChangeHandler}
        />
      </Wrapper>
      <Checkbox
        isChecked={state.isChecked}
        id="isActive"
        name="isActive"
        label="is Active"
        onClick={() => setState({ ...state, isChecked: !state.isChecked })}
      />
      <ButtonWrapper>
        <Button
          ariaLabel="Cancel"
          type="button"
          label="Cancel"
          onClick={() => closeModal()}
        />
        <Button ariaLabel="Save" type="submit" label="Save" />
      </ButtonWrapper>
    </FormContainer>
  );
};

export default AddContact;
