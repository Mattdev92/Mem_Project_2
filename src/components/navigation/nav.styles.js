import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  top: 10vh;
  left: 10vw;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  font-size: 1.5rem;
  align-items: center;
  height: 80vh;
  width: 20vw;
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  color: black;
  text-decoration: none;
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
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.transparentBlue};
  color: white;
`;
