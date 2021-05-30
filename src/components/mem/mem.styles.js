import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Wrapper = styled(Card)`
  margin: 20px;
  @media (max-width: 900px) {
    width: 250px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Shadows Into Light', cursive;
`;
