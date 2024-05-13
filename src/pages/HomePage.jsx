import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import MainNavBar from "../components/MainNavBar";
import FooterBar from "../components/Footer";
import icon from "../assets/Icone.png";
import iconDark from "../assets/IconeDark.png"
import Kanban from "../components/KanbanContainer"
import KanbanMobile from "../components/KanbanContainerMobile"
import Swal from 'sweetalert2';

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
    }, [darkMode]);

    const openModal = () => {
        Swal.fire({
            title: '<img src="src/assets/Icone.png" alt="Imagem">Frase do dia',
            html: '<br><p>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</p>',
            showCloseButton: true,
            focusConfirm: false,
            showConfirmButton: false,
        });
    };

    return (
        <PageContainer darkMode={darkMode}>
            <MainNavBar setDarkMode={setDarkMode} />
            <FraseDoDiaContainerMobile darkMode={darkMode} onClick={openModal}>
                <Icon darkMode={darkMode}>{darkMode ? <img src={iconDark} alt="icon"></img> : <img src={icon} alt="icon"></img>}</Icon>
                <FraseDoDiaTitleMobile darkMode={darkMode}>Frase do dia</FraseDoDiaTitleMobile>
            </FraseDoDiaContainerMobile>
            <FraseDoDiaContainer darkMode={darkMode}>
                <Icon darkMode={darkMode}>{darkMode ? <img src={iconDark} alt="icon"></img> : <img src={icon} alt="icon"></img>}</Icon>
                <FraseDoDiaContent>
                    <FraseDoDiaTitle darkMode={darkMode}>Frase do dia</FraseDoDiaTitle>
                    <FraseDoDia darkMode={darkMode}>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</FraseDoDia>
                </FraseDoDiaContent>
            </FraseDoDiaContainer>
            <Kanban darkMode={darkMode}/>
            <KanbanMobile darkMode={darkMode}/>
            <FooterBar darkMode={darkMode}/>
        </PageContainer>
    )
}
  
const Icon = styled.span`
    margin-right: 10px;
    img{
        height: 64px;
        width: 64px;
    }
`;

const FraseDoDiaTitle = styled.h4`
    font-family: Poppins;
    font-size: 22px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: ${(props) => (props.darkMode ? "#FAFAFA" : "")};
`;

const FraseDoDiaTitleMobile = styled.h4`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: ${(props) => (props.darkModeVerify ? "#3867d6" : "#FAFAFA")};
`;

const FraseDoDia = styled.p`
    font-family: Poppins;
    font-size: 19px;
    font-weight: 400;
    line-height: 1.5;
    text-align: start;
    color: ${(props) => (props.darkMode ? "#FAFAFA" : "")};
`;

const FraseDoDiaContainer = styled.div`
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

const FraseDoDiaContainerMobile = styled.div`
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
    @media screen and (max-width: 1280px){
        display:flex;
    }
`;

const FraseDoDiaContent = styled.div`
    display: flex;
    flex-direction:column;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    width:100vw;
    background-color: ${(props) => (props.darkMode ? "#222222" : "")};
`;
