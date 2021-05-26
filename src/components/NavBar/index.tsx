import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { NavBarContext } from '../../context/NavBarContext';
import { IconContext } from 'react-icons';

import {
  NavBar,
  NavBarMenu,
  NavMenuItems,
  NavBarToggle,
  NavActive,
  NavText
} from './styles';
const Navbar = () => {
  const [activeLink, setActiveLink] = useContext(NavBarContext);

  const clickHandler = (e) => {
    setActiveLink(e.currentTarget.title);
  };

  const getNavBarItem = (item) => {
    return (
      <Link to={item.path}>
        {item.icon}
        <span>{item.title}</span>
      </Link>
    );
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavBar />
        <NavBarMenu>
          <NavMenuItems>
            <NavBarToggle />
            {SidebarData.map((item, index) => {
              if (activeLink === item.title) {
                return (
                  <NavActive
                    key={index}
                    title={item.title}
                    onClick={(e) => clickHandler(e)}
                  >
                    {getNavBarItem(item)}
                  </NavActive>
                );
              }
              return (
                <NavText
                  key={index}
                  title={item.title}
                  onClick={(e) => clickHandler(e)}
                >
                  {getNavBarItem(item)}
                </NavText>
              );
            })}
          </NavMenuItems>
        </NavBarMenu>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
