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
type Props = {
  contact: {
    id: number;
    first_name: string;
    last_name: string;
    department: string;
    email: string;
    contribution: number;
    gender?: string;
    isChecked?: boolean;
    avatar?: string;
  };
  updateContactHandler: (param) => void;
  closeModal: () => void;
};

type Option = any;
const EditContact: FC<Props> = ({
  contact,
  closeModal,
  updateContactHandler
}) => {
  const { id, first_name, last_name, department, email, avatar } = contact;
  const [state, setState] = useState({
    id,
    first_name,
    last_name,
    department,
    email,
    gender: 'Male',
    isChecked: false,
    contribution: 0,
    avatar
  });
  const [error, setError] = useState({ first_name: '', email: '' });

  const update = (e) => {
    e.preventDefault();
    if (state.first_name === '' && state.email === '') {
      setError({
        first_name: 'first name is required',
        email: 'email is required'
      });
      return;
    } else if (state.first_name === '') {
      setError({ ...error, first_name: 'first name is required' });
      return;
    } else if (state.email === '') {
      setError({ ...error, email: 'email is required' });
      return;
    }
    updateContactHandler(state);
    setState({ ...state, first_name: '', email: '' });
  };

  const getOptions = (): Option[] => {
    const option1 = ['Male', 'Male'] as Option;
    const option2 = ['Female', 'Female'] as Option;
    const option3 = ['Other', 'Other'] as Option;

    return [option1, option2, option3];
  };

  const onChangeHandler = (e) => {
    if (!e.target) {
      setState({ ...state, contribution: e });
    } else {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    }
  };

  const genderHandler = (value) => {
    setState({ ...state, gender: value });
  };
  return (
    <FormContainer onSubmit={update} data-testid="form">
      <Wrapper>
        <StyledTextInput
          label="First Name:"
          type="text"
          name="first_name"
          placeholder="Name"
          dataTestId="firstname"
          value={state.first_name}
          onChange={onChangeHandler}
          errorMessage={error.first_name && 'First name is required'}
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
        errorMessage={error.email && 'Email is required'}
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
          value={state.contribution}
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

export default EditContact;
