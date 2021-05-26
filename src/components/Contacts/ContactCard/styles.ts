import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  border: 1px solid rgba(34, 36, 38, 0.15);
  display: flex;
  gap: 30px;
  margin-left: 40px;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  margin-top: 20px;
  margin-left: 10px;
  vertical-align: top;
  width: 2.5em;
  height: 2.5em;
  border-radius: 500rem;
  max-width: 100%;
  border-style: none;
  background-color: transparent;
`;

export const ImageContent = styled.div`
  text-align: center;
  flex-grow: 1;
`;

export const Content = styled.div`
  padding: 15px 10px;
  text-align: center;
  margin: 5px;
  width: 100px;
  flex-basis: 100px;
  flex-grow: 1;
`;

export const StyledLink = styled(Link)`
  color: #4183c4;
  text-decoration: none;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  margin-right: auto;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
`;

export const Attribute = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  margin-right: auto;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.87);
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
  height: 15px;
  width: 15px;
  color: grey;
`;

export const Options = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 20px;
`;
