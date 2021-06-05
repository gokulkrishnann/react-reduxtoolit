import React from 'react';
import { screen, render } from '@testing-library/react';
import { NavBarContext } from '../context/NavBarContext';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const renderNavBar = (activeLink) => {
  return render(
    <NavBarContext.Provider value={activeLink}>
      <Router>
        <NavBar />
      </Router>
    </NavBarContext.Provider>
  );
};
test('verify the context', () => {
  const activeLink = 'Products';
  renderNavBar(activeLink);
  expect(screen.getByText(activeLink)).toBeInTheDocument();
});
