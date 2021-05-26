import {
  Wrapper,
  Nav,
  Title,
  StyledLink,
} from 'components/navigation/nav.styles';
import { useDispatch } from 'react-redux';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListIcon from '@material-ui/icons/List';
import Button from '@material-ui/core/Button';

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Title>MemCategory</Title>
      <Nav>
        <List>
          <ListItem button>
            <FavoriteIcon />
            <StyledLink to="/hot">HOT</StyledLink>
          </ListItem>
          <ListItem button>
            <ListIcon />
            <StyledLink to="/regular">REGULAR</StyledLink>
          </ListItem>
        </List>
        <Divider />
      </Nav>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: 'EXAMPLE_ACTION' })}
      >
        Add new MEM
      </Button>
    </Wrapper>
  );
};

export default Navigation;
