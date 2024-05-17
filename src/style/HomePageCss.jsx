import styled from 'styled-components';

export const Icon = styled.span`
    margin-right: 10px;
    img{
        height: 64px;
        width: 64px;
    }
`;

export const FraseDoDiaTitle = styled.h4`
    font-family: Poppins;
    font-size: 22px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: ${(props) => (props.darkMode ? "#FAFAFA" : "")};
`;

export const FraseDoDiaTitleMobile = styled.h4`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: ${(props) => (props.darkMode ? "#3867d6" : "#FAFAFA")};
`;

export const FraseDoDia = styled.p`
    font-family: Poppins;
    font-size: 19px;
    font-weight: 400;
    line-height: 1.5;
    text-align: start;
    color: ${(props) => (props.darkMode ? "#FAFAFA" : "")};
`;

export const FraseDoDiaContainer = styled.div`
    display: flex;
    padding: 20px;
    border-radius: 5px;
    max-width: 920px;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 2px 2px 10px 2px #0000000A;
    margin-bottom:20px;
    height:15vh;
    margin-top:12vh;
    background-color: ${(props) => (props.darkMode ? "#3d3d3d" : "#FFFFFF")};
    @media screen and (max-width: 1279px), (max-height: 719px) {
        display:none;
    }
`;

export const FraseDoDiaContainerMobile = styled.div`
    background-color: ${(props) => (props.darkMode ? "#3d3d3d" : "#FFD569")};
    display: flex;
    justify-content:start;
    align-items:center;
    padding: 20px;
    border-radius: 5px;
    width: 80vw;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 2px 2px 10px 2px #0000000A;
    margin-bottom:20px;
    height:5vh;
    margin-top:12vh;
    display: none;
    @media screen and (max-width: 1280px), screen and (max-height: 720px) {
        display:flex;
    }
`;

export const FraseDoDiaContent = styled.div`
    display: flex;
    flex-direction:column;
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    width:100vw;
    background-color: ${(props) => (props.darkMode ? "#222222" : "")};
`;