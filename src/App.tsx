import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import { NavBarContext } from './context/NavBarContext';
import { fetchContacts } from './store/contact-slice';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}
`;

store.dispatch(fetchContacts());
export const NoPage = () => <div> No page found </div>;
const App = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <>
      <Provider store={store}>
        <NavBarContext.Provider value={[activeLink, setActiveLink]}>
          <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/products" component={Products} />
              <Route component={NoPage}></Route>
            </Switch>
          </Router>
        </NavBarContext.Provider>
      </Provider>
    </>
  );
};

export default App;
