import styled from 'styled-components';

export const PasswordField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    width: 90vw;
  }
`;

export const RegisterInput = styled.input`
  width: 25vw;
  height: 3rem;
  border-radius: 8px;
  border: 1px solid #002d6c;
  padding-right: 30px;
  box-sizing: border-box;
  background: #eef5ff;
  font-size: 18px;
  padding-left: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    width: 90vw;
  }
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const HorizontalSeparator = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 170px;
  height: 1px;
  background-color: #3b5f91;
  margin-left: auto;
  margin-right: auto;
`;

export const VerticalSeparator = styled.div`
  width: 4px;
  height: 80vh;
  background-color: #9cc7fbb2;
  margin-left: 5rem;
  margin-right: 5rem;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    display: none;
  }
`;

export const RegisterButton = styled.button`
  margin-top: 25px;
  width: 25vw;
  height: 3.5rem;
  border-radius: 20px;
  opacity: 0px;
  background: #226ed8;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    width: 90vw;
  }
`;

export const RegisterContent = styled.section`
  display: flex;
  flex-direction: column;
  p {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin-bottom: 5px;
  }
`;

export const RegisterContainer = styled.div`
  height: auto;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    height: 100%;
    width: 90vw;
  }
`;

export const ImgRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 1000px;
  max-width: 920px;
  width: 45vw;
  height: auto;
  overflow-y: hidden;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    display: none;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  width: 100vw;
  height: 100vh;
  max-height: 1080px;
  max-width: 1920px;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`;

export const Title = styled.h1`
  color: #226ed8;
  font-family: Poppins, sans-serif;
  font-size: 62px;
  font-weight: 700;
  line-height: 63px;
  text-align: center;
  margin-bottom: 5vh;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    font-size: 42px;
    margin-top: 5vh;
  }
`;

export const SubTitle = styled.h2`
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #00122a;
  margin-bottom: 15px;
  @media screen and (max-width: 1023px), (max-height: 799px) {
    font-size: 16px;
  }
`;

export const PasswordMismatchMessage = styled.h3`
  color: #820000;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
`;
