import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('App', () => {
  test('Renders App', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Contacts'));
    expect(screen.getByTitle('Contacts')).toBeInTheDocument();
    expect(screen.getByTitle(/Search Contacts/)).toBeInTheDocument();
  });
});
