import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  background-color: #00b0ff;
  height: 100%;
`;
export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const activeClassName = 'nav-item-active';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-align: center;
  text-justify: center;
  text-decoration: none;
  font-family: 'Cinzel', serif;
  color: white;
  font-size: 2rem;
  &.${activeClassName} {
    transform: translateX(10px) scale(1.2);
    transition: transform 1s ease-in;
  }
`;
