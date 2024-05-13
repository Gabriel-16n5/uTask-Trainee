import {FraseDoDia, FraseDoDiaContainer, FraseDoDiaContainerMobile, FraseDoDiaContent, FraseDoDiaTitle, FraseDoDiaTitleMobile, Icon, PageContainer} from '../style/HomePageCss'
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