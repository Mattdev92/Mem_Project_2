import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.coolGrey}; */
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: top;
  flex-direction: column;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 10px 0;
  width: 100%;
  height: 60%;
  height: 40px;
  font-family: 'Shadows Into Light', cursive;
`;
const activeClassName = 'nav-item-active';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-align: center;
  text-decoration: none;
  font-family: 'Cinzel', serif;
  color: black;
  font-size: 1.3rem;
  &.${activeClassName} {
    transform: translateX(10px) scale(1.2);
    transition: transform 1s ease-in;
  }
`;

export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
