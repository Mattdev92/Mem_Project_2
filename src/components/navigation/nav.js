import {
  Wrapper,
  Nav,
  Title,
  StyledLink,
  useStyles,
} from 'components/navigation/nav.styles';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListIcon from '@material-ui/icons/List';
import Button from '@material-ui/core/Button';
import TransitionsModal from 'components/modal/modal';
import AddIcon from '@material-ui/icons/Add';

const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
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
          <ListItem button>
            <ListIcon />
            <StyledLink to="/favourite">FAVOURITE</StyledLink>
          </ListItem>
        </List>
        <Divider />
      </Nav>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Add new MEM
      </Button>
      <TransitionsModal open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default Navigation;
