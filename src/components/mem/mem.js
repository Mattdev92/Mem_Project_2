import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import {
  Wrapper,
  Title,
  Button,
  ButtonWrapper,
} from 'components/mem/mem.styles';

const Mem = () => {
  const author = useSelector(
    ({ navigationReducer }) => navigationReducer.author
  );
  const dispatch = useDispatch();
  console.log(author);
  return (
    <Wrapper>
      <Title>Mem</Title>
      <ButtonWrapper>
        <Button onClick={() => dispatch({ type: 'EXAMPLE_ACTION' })}>
          UpVote
        </Button>
        <Button onClick={() => dispatch({ type: 'EXAMPLE_ACTION' })}>
          DownVote
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Mem;
