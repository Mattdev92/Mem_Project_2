import {
  Wrapper,
  Nav,
  Title,
  Button,
  StyledLink,
} from 'components/navigation/nav.styles';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

const Navigation = () => {
  const author = useSelector(
    ({ navigationReducer }) => navigationReducer.author
  );
  const dispatch = useDispatch();
  console.log(author);
  return (
    <Wrapper>
      <Title>MemCategory</Title>
      <Nav>
        <StyledLink to="/hot">HOT</StyledLink>
        <StyledLink to="/regular">REGULAR</StyledLink>
      </Nav>
      <Button onClick={() => dispatch({ type: 'EXAMPLE_ACTION' })}>
        Click me
      </Button>
    </Wrapper>
  );
};

export default Navigation;
