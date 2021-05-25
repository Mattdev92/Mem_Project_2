import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 0 100px 5px 0;
  position: absolute;
  top: 10vh;
  right: 10vw;
  display: block;
  height: 80vh;
  width: 60vw;
  background-color: ${({ theme }) => theme.colors.transparentDarkerBlue};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  margin: 10px 0;
  width: 100%;
  height: 40px;
  color: white;
`;
