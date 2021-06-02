import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.h2`
  text-align: center;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  line-height: 1.28571429em;
  margin: calc(2rem - 0.14285714em) 0 1rem;
  font-weight: 700;
  padding: 0;
`;

export const SearchBar = styled.div`
  display: flex;
  text-align: center;
  font-size: 1em;
  position: relative;
`;

export const SearchBlock = styled.div`
  padding-left: 40px;
  position: relative;
  font-weight: 400;
  font-style: normal;
  display: flex;
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
`;

export const SearchInput = styled.input`
  font-family: FontAwesome, Roboto, sans-serif;
  border-radius: 6px;
  border: 1.5px solid rgba(34, 36, 38, 0.15);
  margin: 0;
  max-width: 100%;

  flex: 1 0 auto;
  outline: 0;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
  line-height: 1.21428571em;
  padding: 0.67857143em 1em;
  background: #fff;
  position: relative;
  font-weight: 400;
  font-style: normal;
  width: 100%;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  pointer-events: none;
  cursor: pointer;
  position: absolute;
  line-height: 1;
  text-align: center;
  top: 0;
  right: 0;
  margin-right: 0.5rem;
  height: 100%;
  width: 2.67142857em;
  opacity: 0.5;
  border-radius: 0 0.28571429rem 0.28571429rem 0;
  transition: opacity 0.3s ease;
  float: right;
  font-size: 20px;
  font-family: Icons;
  font-style: normal;
  font-weight: 400;
  text-decoration: inherit;
`;
export const List = styled.div`
  list-style-type: none;
  margin: 1em 0;
  padding: 0 0;
`;

export const NoResults = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
