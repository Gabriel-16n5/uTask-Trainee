import styled from 'styled-components';

export const MainNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) =>
    props.darkModeVerify ? '#333333' : '#226ED8'};
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 0px 10px 2px #0000004d;
  img {
    width: 23.28px;
    height: 40px;
    top: 20px;
    left: 160px;
    @media screen and (max-width: 480px) {
      width: 20px;
      height: 30px;
      top: 10px;
      left: 160px;
    }
  }
`;

export const Title = styled.h1`
  color: ${(props) => (props.darkModeVerify ? '#3867d6' : '#FAFAFA')};
  font-family: Poppins, sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: 63px;
  text-align: center;
  width: 45vw;
  height: auto;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
