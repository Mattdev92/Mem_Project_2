import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export const AppWrapper = styled.div`
  background-color: white;
`;
export const NavWrapper = styled.div`
  background: #424242;
  height: 100%;
`;

export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  background: #424242;
  color: black;
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

const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
