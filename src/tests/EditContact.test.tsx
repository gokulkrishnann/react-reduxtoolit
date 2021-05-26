import React from 'react';
import EditContact from '../components/Contacts/EditContact';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

describe('Verify Edit Contact Form', () => {
  it('test to verify Edit Contact component', async () => {
    const updateContactHandler = jest.fn();
    const closeModal = jest.fn();
    const contact = {
      id: 1,
      first_name: 'cristiano',
      last_name: 'ronaldo',
      department: 'football',
      email: 'cr7@football.com',
      contribution: 290
    };
    let { getByDisplayValue, getByText, getByTestId } = render(
      <EditContact
        contact={contact}
        closeModal={closeModal}
        updateContactHandler={updateContactHandler}
      ></EditContact>
    );

    function hasInputValue(e, inputValue) {
      return getByDisplayValue(inputValue) === e;
    }
    expect(getByTestId('form')).toContainElement(getByTestId('firstname'));

    const firstName = getByTestId('firstname');
    fireEvent.change(getByTestId('firstname'), {
      target: { value: '' }
    });
    fireEvent.submit(getByTestId('form'));
    expect(getByText(/First name is required/)).toBeInTheDocument();
    fireEvent.change(getByTestId('firstname'), {
      target: { value: 'gokul' }
    });
    expect(hasInputValue(firstName, 'gokul')).toBe(true);
    fireEvent.submit(getByTestId('form'));
  });
});
