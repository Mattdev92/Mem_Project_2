import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: absolute;
  top: 10vh;
  left: 10vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 20vw;
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  color: black;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: top;
  flex-direction: column;
  font-size: 1.5rem;
  align-items: center;
  height: 60vh;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  margin: 10px 0;
  width: 100%;
  height: 40px;
  color: white;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.transparentBlue};
  color: white;
`;
const activeClassName = 'nav-item-active';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-align: center;
  margin: 10px 0;
  width: 150px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  &.${activeClassName} {
    background-color: black;
    color: white;
    box-shadow: inset 0 0 1em black, 0 0 1em black;
  }
`;
