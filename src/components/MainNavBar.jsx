import styled from "styled-components"
import logoBranco from "../assets/LogoBranca.png";
import logoBlue from "../assets/LogoAzul.png";
import Switch from "react-switch";
import { useState } from "react";



export default function MainNavBar(props) {
    const {setDarkMode} = props
    const [darkModeVerify, setDarkModeVerify] = useState(false);

    const switchHandlerDarkMode = (checked) => {
        setDarkModeVerify(checked);
        setDarkMode(checked);
        if(darkModeVerify === false) setDarkMode(true);
        if (darkModeVerify === true) setDarkMode(false);
    };

    return (
        <MainNav darkModeVerify={darkModeVerify}>
            {darkModeVerify ? <img src={logoBlue} alt="icon"></img> : <img src={logoBranco} alt="icon"></img>}
            <Title darkModeVerify={darkModeVerify}>uTask 3.0</Title>
            <ButtonContainer>
            <Button>
                <Switch
                checked={darkModeVerify}
                onChange={switchHandlerDarkMode}
                offColor="#FFC93F"
                onColor="#222222"
                />
                {/* <p>Dark Mode</p> */}
            </Button>
        </ButtonContainer>
        </MainNav>
    )
}

const MainNav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => (props.darkModeVerify ? "#333333" : "#226ED8")};
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0px 0px 10px 2px #0000004D;
    img {
        width: 23.28px;
        height: 40px;
        top: 20px;
        left: 160px;
        @media screen and (max-width: 480px){
            width: 20px;
            height: 30px;
            top: 10px;
            left: 160px;
}
    }
`

const Title = styled.h1`
    color: ${(props) => (props.darkModeVerify ? "#3867d6" : "#FAFAFA")};
    font-family: Poppins, sans-serif;
    font-size: 42px;
    font-weight: 700;
    line-height: 63px;
    text-align: center;
    width: 45vw;
    height: auto;
    @media screen and (max-width: 480px){
        font-size:30px;
}
`

const Button = styled.div`
    display:flex;
    justify-content: center;
    align-items: start;
    /* p{
        font-size:.7vw;
        margin-top: 4px;
        margin-left: 10px;
        font-family: 'Open Sans';
        @media(max-width: 1540px) {
        font-size: 5vw;
    }
    } */
`
const ButtonContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`