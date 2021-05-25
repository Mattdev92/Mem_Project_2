import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import {
  Wrapper,
  Title,
  Button,
  ButtonWrapper,
} from 'components/mem/mem.styles';

const Mem = ({ data }) => {
  const author = useSelector(
    ({ navigationReducer }) => navigationReducer.author
  );
  const dispatch = useDispatch();
  console.log(author);
  const { title, upvotes, downvotes } = data;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ButtonWrapper>
        <Button
          onClick={() => dispatch({ type: 'UPVOTE_ACTION', payload: title })}
        >
          UpVote:
          {upvotes}
        </Button>
        <Button
          onClick={() => dispatch({ type: 'DOWNVOTE_ACTION', payload: title })}
        >
          DownVote: {downvotes}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Mem;
