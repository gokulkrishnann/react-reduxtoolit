import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  //   const leftClick = { button: 0 };
  //   userEvent.click(screen.getByText(/Products/i), leftClick);
  userEvent.click(screen.getByText(/Products/i));
  expect(screen.getByText(/Products Page/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/Contacts/i));
  expect(screen.getByText(/Contacts List/i)).toBeInTheDocument();
});
