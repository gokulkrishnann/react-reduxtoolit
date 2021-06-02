import styled from 'styled-components';

export const NavBar = styled.div`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavBarMenu = styled.nav`
  background-color: #060b26;
  height: 200vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  width: 250px;
`;

export const NavMenuItems = styled.ul`
  width: 100%;
`;

export const NavBarToggle = styled.li`
  background-color: #060b26;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavText = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
  & a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }
  & a > span {
    margin-left: 16px;
  }
`;

export const NavActive = styled(NavText)`
  background-color: green;
`;
