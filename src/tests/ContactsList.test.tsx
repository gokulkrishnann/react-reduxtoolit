import React from 'react';
import ContactList from '../components/Contacts/ContactList';
import '@testing-library/jest-dom/extend-expect';
import { render, waitForElement, screen } from '@testing-library/react';

describe('Verify Contacts List ', () => {
  it('test to verify contacts list', async () => {
    const term = '';
    const updateContactHandler = jest.fn();
    const searchKeyword = jest.fn();
    const contactsList = [
      {
        id: 1,
        first_name: 'cristiano',
        last_name: 'ronaldo',
        department: 'football',
        email: 'cr7@football.com',
        contribution: 2909
      },
      {
        id: 2,
        first_name: 'M',
        last_name: 'messi',
        department: 'football',
        email: 'messi@football.com',
        contribution: 190909
      }
    ];
    const { getByTestId } = render(
      <ContactList
        contacts={contactsList}
        term={term}
        searchKeyword={searchKeyword}
        updateContactHandler={updateContactHandler}
      ></ContactList>
    );
    const list = await waitForElement(() => getByTestId('contactList'));
    expect(list).toHaveTextContent('cristiano');
    expect(screen.getByText(/ronaldo/)).toBeInTheDocument();
    expect(screen.getByText(/messi@football.com/)).toBeInTheDocument();
  });
});
