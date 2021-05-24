import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin: 20px;
  height: 50vh;
  width: 40vw;
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  color: white;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30vw;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.h1`
  margin: 0 20px;
  width: 150px;
  height: 40px;
  background-color: black;
  color: white;
  border: 1px solid white;
  font-size: 1.3rem;
  text-align: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;
