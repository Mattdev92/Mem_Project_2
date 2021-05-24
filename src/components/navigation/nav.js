import { Nav, Title, Button } from 'components/navigation/nav.styles';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const author = useSelector(
    ({ navigationReducer }) => navigationReducer.author
  );
  const dispatch = useDispatch();
  console.log(author);
  return (
    <Nav>
      <Title>MemCategory</Title>
      <NavLink to="/hot">HOT</NavLink>
      <NavLink to="/regular">REGULAR</NavLink>
      <Button onClick={() => dispatch({ type: 'EXAMPLE_ACTION' })}>
        Click me
      </Button>
    </Nav>
  );
};

export default Navigation;
